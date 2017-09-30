import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable() 
export class getChannels {
    constructor(private http: Http){
      console.log("Getting data.......................");
    }

    getData(){
        return this.http.get('https://newsapi.org/v1/sources').map(res => res.json());
    }
    
    getNews(source){
        var endpoint = 'https://newsapi.org/v1/articles?source=the-huffington-post&sortBy=latest&apiKey=cbbf845e87d94bfa99f0f1419fbe6b00';
        //var source = "the-huffington-post"
        return this.http.get('https://newsapi.org/v1/articles?source='+source+'&apiKey=cbbf845e87d94bfa99f0f1419fbe6b00').map(res => res.json());
    }
}