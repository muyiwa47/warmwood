import { Component } from '@angular/core';
import { getChannels } from '../services/getchannels.services';
import {Router} from '@angular/router';
import {MdMenuModule} from '@angular/material';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./css/home.component.css'],
  providers: [getChannels]
})

//Home Component
export class HomeComponent {
  title : string;
  channelObject : any[];
  status: boolean;
  categories: any[];
  arr : any[] = [];
  myfilterStr : string = 'all';

  //Class Constructor
  constructor(private getChannels: getChannels, private route: Router ){
    this.title = "News API";
    this.status = true;
    this.categories = ['all', 'general', 'entertainment' , 'gaming', 'music', 'politics', 'science-and-nature', 'sport', 'technology'];
    this.channelObject = [];
    this.getChannels.getData().subscribe(channels => {
           for (var item in channels.sources){
             this.channelObject.push(channels.sources[item])
           }  
           console.log(this.channelObject)
    })
  }

  toggleFilter(){
      if (this.status == true) {
        this.status = false
      } else {
        this.status = true
      }
  }

  filterOption(value){
    this.myfilterStr = value
    return this.myfilterStr   
  }
    
  onSelect(channel){
    this.route.navigate(['/channels', channel.id]);
  }
}