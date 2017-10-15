import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule, MatIconModule, MatButtonModule, MatCardModule, MatCheckboxModule } from '@angular/material';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { ChannelComponent } from './components/channels.component';
import { FavoriteComponent} from './components/favorites.component';
import { routing } from './app.routing';
import { FilterPipe } from './components/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChannelComponent,
    FavoriteComponent,
    FilterPipe
  ],
  imports: [
     BrowserModule,
     HttpModule, 
     routing, 
     FormsModule, 
     ReactiveFormsModule,  
     MatMenuModule, 
     MatIconModule, 
     MatButtonModule, 
     MatCardModule, 
     MatCheckboxModule,
     BrowserAnimationsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
