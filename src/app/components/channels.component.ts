import { Component } from '@angular/core';
import { getChannels } from '../services/getchannels.services';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./css/home.component.css'],
  providers: [getChannels]
})

//Home Component
export class ChannelComponent {
  title : string;
  articleObject : any[];
  source : string;
  articles : articles[];
  
  //Class Constructor
  constructor(private getChannels: getChannels, private route: ActivatedRoute, private router: Router){
    this.title = "Channel List";
    this.articleObject = [];
  }

  goHome(){
    this.router.navigate(['/']);
  }
  
  ngOnInit(){
    let id = this.route.snapshot.params['id'];
    this.source = id;
    this.getChannels.getNews(this.source).subscribe(data => { 
      for (var item in data.articles){
        this.articleObject.push(data.articles[item]); 
      }  
      console.log(this.articleObject)
   })
 }
}

interface articles {
  category : string,
  country : string,
  description : string,
  id : string,
  language: string,
  name: string,
  sortBysAvailable: any[]  
  url : string,
  urlsToLogos : { small: any, medium: any, large: any}
}