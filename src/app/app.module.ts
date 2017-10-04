import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { ChannelComponent } from './components/channels.component';
import { routing } from './app.routing';
import { FilterPipe } from './components/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChannelComponent,
    FilterPipe
  ],
  imports: [BrowserModule, HttpModule, routing, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
