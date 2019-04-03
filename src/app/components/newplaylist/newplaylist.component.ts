import { Component, OnInit } from '@angular/core';
import { GetPlayService } from '../../services/get-play.service';

import { DomSanitizer } from '@angular/platform-browser';



import { Playlist } from '../../models/playList';
import { Item, Tracks, Album, Artist2,ExternalIds,ExternalUrls4, TrackJson } from '../../models/tacksJson';



//  var val:string = (<HTMLInputElement>document.getElementById("fi")).value;


@Component({
  selector: 'app-newplaylist',
  templateUrl: './newplaylist.component.html',
  styleUrls: ['./newplaylist.component.css']
})
export class NewplaylistComponent implements OnInit {
 green  ='Green.jpg';
 orange = 'Orange.jpg';
  name: string = 'lu';

  fullLink: string = 'https://open.spotify.com/embed/user/1244653463/playlist/0ugR4wxPu1IUQ3r8P7vCLk'


  PlaylistHref: string = "https://open.spotify.com/embed/user/1244653463/playlist/"

  curply: string = "7sStwRbTGePw8Lo6OZxlY9";

  currentCode: AccessCode = {
    code:""
  }

  currentPlaylist: Playlist = {
    name: "",
    description: "",
    public: false
  }
  
  constructor(private getPlay: GetPlayService, private sanitize: DomSanitizer) { 
    this.sanitize = sanitize;
  }

  ngOnInit() {
    console.log(this.searched)
  }
  
  getImage(){
    return 'url(src/assets/Green.jpg)'
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

// searched1: Item = {
//   album: null,
//   artists:[],
//   available_markets: [],
//   disc_number:0,
//   duration_ms:0,
//   explicit: false,
//   external_ids: null,
//   external_urls:null,
//   href: "",
//   id:"",
//   is_local:false,
//   name:"",
//   popularity:0,
//   preview_url:"",
//   track_number:0,
//   type:"",
//   uri:""
// }

searched1: TrackJson= {
  tracks: null
}

searched: Tracks={
        href: '',
        items: [],
        limit: 0,
        next: '',
        offset: 0,
        previous: null,
        total: 0
}


currentTrack: Track ={
  trackId:"",
  album:[],
  name:[]
}
  playlistLink: string = this.PlaylistHref + this.currentPlaylist.name;
  showNewPlayistId(){
   
     this.getPlay.newPlaylist().subscribe((data: Playlist)=> this.currentPlaylist ={

       name: data['id'],
       description: data['name'],
       public: data['public']
     

  }); 
  }

  showSomething(){
    this.getPlay.getSomething().subscribe((data: Track)=> this.currentTrack = {
        album: data['album'],
        trackId: data['id'],
        name: data['name']
  
    });
    console.log(this.currentTrack.name)
  }

  // 
  
    searchedForTrack(search:string){
      this.getPlay.search(search).subscribe((data:TrackJson)=> this.searched1={
        tracks: data['tracks']

      })
      console.log(this.searched1.tracks.items[0].id)
    }


  postTrack(playListId:string, track:string){
    this.getPlay.addTrack(playListId, track).subscribe((data: Track)=>this.currentTrack={
      
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
