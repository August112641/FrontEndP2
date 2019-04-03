import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModel ,FormsModule} from '@angular/forms'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AdduserComponent } from './components/adduser/adduser.component';
import { TableComponent } from './components/table/table.component';
import { TableRowComponent } from './components/table-row/table-row.component';
import { TrackComponentComponent } from '../app/components/track-component/track-component.component';
import { NewplaylistComponent } from './components/newplaylist/newplaylist.component';
import { AddTrackComponent } from '../app/components/add-track/add-track.component';
import { Router, Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
 
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
    TableComponent,
    TrackComponentComponent,
    NewplaylistComponent,
    AddTrackComponent,
    TableRowComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes,{enableTracing: true}),
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
