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

  //Class Constructor
  constructor(private getChannels: getChannels, private route: Router ){
    this.title = "News API";
    this.status = true;
    this.categories = ['general', 'entertainment' , 'gaming', 'music', 'politics', 'science-and-nature', 'sport', 'technology'];
    this.channelObject = [];
    this.getChannels.getData().subscribe(channels => {
           for (var item in channels.sources){
             this.channelObject.push(channels.sources[item])
           }  
           console.log(this.channelObject)
    })
        // var count = 0, categoriesObject = {};
        // for (var i in this.channelObject) {
        //   if (!(categoriesObject[this.channelObject[i].category])){
        //     categoriesObject[this.channelObject[i].category] = count++;
        //   }
        // }
        // this.categories = Object.keys(categoriesObject);
        // console.log(categoriesObject);
  }

  toggleFilter(){
    if (this.status == true) {
      this.status = false
    } else {
      this.status = true
    }
  }

  onSelect(channel){
    this.route.navigate(['/channels', channel.id]);
  }
}