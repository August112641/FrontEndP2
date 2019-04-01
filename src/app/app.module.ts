import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
=======
import { HttpClientModule, HttpClient } from '@angular/common/http';
>>>>>>> 2f5fe576621b5b7ff5b4d38965861a06c5eec76a
import { NgModel ,FormsModule} from '@angular/forms'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
=======
import { FormsModule }from '@angular/forms';
>>>>>>> 2f5fe576621b5b7ff5b4d38965861a06c5eec76a
import { AdduserComponent } from './components/adduser/adduser.component';
import { CreateuserComponent } from './components/createuser/createuser.component';
import { TableComponent } from './components/table/table.component';
import { TableRowComponent } from './components/table-row/table-row.component';
import { TrackComponentComponent } from '../app/components/track-component/track-component.component';
import { NewplaylistComponent } from './components/newplaylist/newplaylist.component';
import { AddTrackComponent } from '../app/components/add-track/add-track.component';
import { Router, Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
=======
>>>>>>> 2f5fe576621b5b7ff5b4d38965861a06c5eec76a


const appRoutes: Routes = [
  {path: 'https://accounts.spotify.com/authorize?client_id=b72324b7926347dc83e63ae5d04366f4&response_type=code&redirect_uri=http://localhost:4200/callback&state=sdsfca&scope=user-read-private%20user-read-email', 
  component: NewplaylistComponent,
  data: {header: 'accessToken'}
}
]

@NgModule({
  declarations: [
    AppComponent,
    AdduserComponent,
    CreateuserComponent,
    TableComponent,
<<<<<<< HEAD
    TrackComponentComponent,
    NewplaylistComponent,
    AddTrackComponent,
    TableRowComponent,
    NavbarComponent,
    LoginComponent
=======
    TableRowComponent
>>>>>>> 2f5fe576621b5b7ff5b4d38965861a06c5eec76a
  ],
  imports: [
    BrowserModule,
    FormsModule,
<<<<<<< HEAD
    HttpClientModule,
    RouterModule.forRoot(appRoutes,{enableTracing: true}),
    AppRoutingModule 
=======
    HttpClientModule
    TrackComponentComponent,
    NewplaylistComponent,
    AddTrackComponent,
    
    
>>>>>>> 2f5fe576621b5b7ff5b4d38965861a06c5eec76a
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes,{enableTracing: true}),
    FormsModule
   
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
