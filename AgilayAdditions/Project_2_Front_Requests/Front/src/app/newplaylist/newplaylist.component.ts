import { Component, OnInit } from '@angular/core';
import { GetPlayService } from '../get-play.service';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeUrl } from '@angular/platform-browser' 
import { AddTrackComponent } from '../add-track/add-track.component';


//  var val:string = (<HTMLInputElement>document.getElementById("fi")).value;


@Component({
  selector: 'app-newplaylist',
  templateUrl: './newplaylist.component.html',
  styleUrls: ['./newplaylist.component.css']
})
export class NewplaylistComponent implements OnInit {
 
  name: string = 'lu';

fullLink: string = 'https://open.spotify.com/embed/user/1244653463/playlist/0ugR4wxPu1IUQ3r8P7vCLk'


  PlaylistHref: string = "https://open.spotify.com/embed/user/1244653463/playlist/"

  curply: string = "7sStwRbTGePw8Lo6OZxlY9";

  currentCode: AccessCode = {
    code:""
  }

  currentPlaylist: Playlist = {
    name: "30hgQxcXRNnur0GGvAJPuN",
    description: "",
    public: false
  }
  
  constructor(private getPlay: GetPlayService, private sanitize: DomSanitizer) { 
    this.sanitize = sanitize;
  }

  ngOnInit() {
   
  }
  


getCode(){
  console.log(this.getPlay.login().subscribe)

  return this.getPlay.login().subscribe
}

  getAccessCode(){
    // console.log()
    window.location.href = 'https://accounts.spotify.com/authorize?client_id=b72324b7926347dc83e63ae5d04366f4&response_type=code&redirect_uri=http://localhost:4200/callback&state=sdsfca&scope=user-read-private%20user-read-email';
    this.getPlay.getConfigResponse()
    console.log(this.getAccessCode)
    return this.getPlay.login().subscribe((code: AccessCode)=> this.currentCode = {
      code: code['code']
    })
  }

currentTrack: Track ={
  trackId:"3n3Ppam7vgaVa1iaRUc9Lp",
  album:[],
  name:[]
}
  playlistLink: string = this.PlaylistHref + this.currentPlaylist.name;
  showNewPlayistId(){
   
     this.getPlay.newPlaylist().subscribe((data: Playlist)=> this.currentPlaylist ={

       name: data['id'],
       description: data['description'],
       public: data['public']
     

  }); 
  }

  postTrack(playList:string, track:string){
    this.getPlay.addTrack(this.currentPlaylist.name, this.currentTrack.trackId).subscribe((data: Track)=>this.currentTrack={
      trackId: data['id'],
      album: data['album'],
      name: data['name']
    })
  }

  link: string = 'https://open.spotify.com/embed/user/1244653463/playlist/';
  
  cleanUrl(append: string){
   return this.sanitize.bypassSecurityTrustResourceUrl(this.link + append)
  }
  
}
