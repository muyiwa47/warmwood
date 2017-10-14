import { Component, OnInit } from '@angular/core';
import { getChannels } from '../services/getchannels.services';
import { Router} from '@angular/router';
import { UpperCasePipe } from '@angular/common';
import { MatMenuModule, MatIconModule, MatButtonModule, MatCardModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  preloader: boolean;
  saveFilterValue: string;
  errObject: boolean;
  favoriteChannel : string;
  genre : string;

  //Class Constructor
  constructor(private getChannels: getChannels, private route: Router){
    this.title = "News Headlines";
    this.status = true;
    this.categories = ['all', 'general', 'entertainment' , 'gaming', 'music', 'politics', 'science-and-nature', 'sport', 'technology'];
    this.channelObject = [];
    this.preloader = true;
    this.errObject = false;
    this.genre = this.getCategory();
    this.getChannels.getData().subscribe(channels => {
           for (var item in channels.sources){
             this.channelObject.push(channels.sources[item])
           }       
          console.log(this.preloader);
      }, 
          function err(err){     
            this.errObject = true;
            this.preloader = false;
            console.log(err);
            console.log(this.errObject);
          }, 
        () => this.preloader = false);
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
      return this.myfilterStr;
  }
    
  saveCategory(genre){
    this.genre = genre;
     if (sessionStorage){
       sessionStorage.setItem('currentGenre', this.genre);
     }
  }

  getCategory(){
    if (sessionStorage){
      console.log(sessionStorage.getItem('currentGenre'));
       if (!(sessionStorage.getItem('currentGenre'))) {
          return 'all';
       }
      return sessionStorage.getItem('currentGenre')
    }
  }

  onSelect(channel){
    this.route.navigate(['/channels', channel.id]);
  }
}