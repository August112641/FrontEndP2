import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrackComponentComponent } from './track-component/track-component.component';
import { NewplaylistComponent } from './newplaylist/newplaylist.component';
import { AddTrackComponent } from './add-track/add-track.component';
import { Router, Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {path: 'https://accounts.spotify.com/authorize?client_id=b72324b7926347dc83e63ae5d04366f4&response_type=code&redirect_uri=http://localhost:4200/callback&state=sdsfca&scope=user-read-private%20user-read-email', 
  component: NewplaylistComponent,
  data: {header: 'accessToken'}
}
]

@NgModule({
  declarations: [
    AppComponent,
    TrackComponentComponent,
    NewplaylistComponent,
    AddTrackComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes,{enableTracing: true})
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
