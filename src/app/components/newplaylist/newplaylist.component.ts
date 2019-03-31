import { Component, OnInit } from '@angular/core';
import { GetPlayService } from '../../services/get-play.service';

import { DomSanitizer } from '@angular/platform-browser';
import { SafeUrl } from '@angular/platform-browser' 
// import { AddTrackComponent } from '..components/add-track/add-track.component';
import { JsonPipe } from '@angular/common';
import { Playlist } from '../../models/playList';


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
    console.log(this.searched)
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

searched: Tracks3={
  tracks:{
    items:{
      id:''
    }
  }
}


// searched: Tracks2={
//   tracks:null
// }  
searchedTrack: Tracks ={
  show:{
  tracks: {
    href: '',
    items: [
        {
            album: {
                album_type: '',
                artists: [
                    {
                        external_urls: {
                            spotify: ''
                        },
                        href: '',
                        id: '',
                        name: '',
                        type: '',
                        uri: ''
                    }
                ],
                available_markets: [],
                external_urls: {
                    spotify: ''
                },
                href: '',
                id: '',
                
                name: '',
                release_date: null,
                release_date_precision: '',
                total_tracks: 0,
                type: '',
                uri: ''
            },
            artists: [
                {
                    external_urls: {
                        spotify: ''
                    },
                    href: '',
                    id: '',
                    name: '',
                    type: '',
                    uri: ''
                }
            ],
            available_markets: [],
            disc_number: 0,
            duration_ms: 0,
            explicit: false,
            external_ids: {
                isrc: ''
            },
            external_urls: {
                spotify: ''
            },
            href: '',
            id: '',
            is_local: false,
            name: '',
            popularity: 0,
            preview_url: '',
            track_number: 0,
            type: '',
            uri: ''
        }
    ]
    
}
}
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
       description: data['description'],
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

  // searchForTrack(search:string){
  //   this.getPlay.search(search).subscribe((data:Tracks2)=> this.searched ={
  //     tracks: data['tracks.items']
      
  //   })
  //   console.log(this.searched.tracks)
  // }

  searchForTrack(search:string){
    this.getPlay.search(search).subscribe((data:Tracks3)=> this.searched={
      tracks:{
        items: {
          id: data['tracks.items.id']
          }
        }
      }) 
      console.log(this.searched)
    }
  
    
  


  // searchForTrack(search:string){
  //     this.getPlay.search(search).subscribe((data:Tracks2)=> this.searched={
  //       tracks: data['tracks']
  //     })
  //     console.log(this.searched)
  //   }

  // searchForTrack(search:string){
  //   this.getPlay.search(search).subscribe((data:Tracks)=> this.searchedTrack={
  //     show.['items']: data['tracks']
      
      

  //   })
  //   console.log(this.searchedTrack.show.tracks.items)
  // }

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
