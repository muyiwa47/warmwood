import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {MdMenuModule} from '@angular/material';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { ChannelComponent } from './components/channels.component';
import { ChannelDetailComponent } from './components/channel-details.component';
import { routing } from './app.routing';
import { FilterPipe } from './components/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChannelComponent,
    ChannelDetailComponent,
    FilterPipe
  ],
  imports: [BrowserModule, HttpModule, routing, MdMenuModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
