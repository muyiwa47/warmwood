import { Component } from '@angular/core';
import { getChannels } from '../services/getchannels.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: './channel-details.html',
  styleUrls: ['./css/home.component.css'],
  providers: [getChannels]
})

//Home Component
export class ChannelDetailComponent {
  title : string;
  articleObject : any[];
  source : any;
  
  //Class Constructor
  constructor(private getChannels: getChannels, private route: ActivatedRoute){
    this.title = "Channel List";
    this.articleObject = [];
  }
  ngOnInit(){
     let id = this.route.snapshot.params['id'];
     this.source = id;
  }

}