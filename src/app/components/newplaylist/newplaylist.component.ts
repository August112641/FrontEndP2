import { Component, OnInit } from '@angular/core';
import { GetPlayService } from '../../services/get-play.service';

import { DomSanitizer } from '@angular/platform-browser';
import { SafeUrl } from '@angular/platform-browser' 
// import { AddTrackComponent } from '..components/add-track/add-track.component';
import { JsonPipe } from '@angular/common';
import { Playlist } from '../../models/playList';
import { Item, Tracks, Album, Artist2,ExternalIds,ExternalUrls4, TrackJson } from '../../models/tacksJson';



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

// searched: Tracks3={
//   tracks:{
//     items:{
//       id:''
//     }
//   }
// }


// searched: Tracks2={
//   tracks:null
// }  
// searchedTrack: Tracks ={
//   show:{
//   tracks: {
//     href: '',
//     items: [
//         {
//             album: {
//                 album_type: '',
//                 artists: [
//                     {
//                         external_urls: {
//                             spotify: ''
//                         },
//                         href: '',
//                         id: '',
//                         name: '',
//                         type: '',
//                         uri: ''
//                     }
//                 ],
//                 available_markets: [],
//                 external_urls: {
//                     spotify: ''
//                 },
//                 href: '',
//                 id: '',
                
//                 name: '',
//                 release_date: null,
//                 release_date_precision: '',
//                 total_tracks: 0,
//                 type: '',
//                 uri: ''
//             },
//             artists: [
//                 {
//                     external_urls: {
//                         spotify: ''
//                     },
//                     href: '',
//                     id: '',
//                     name: '',
//                     type: '',
//                     uri: ''
//                 }
//             ],
//             available_markets: [],
//             disc_number: 0,
//             duration_ms: 0,
//             explicit: false,
//             external_ids: {
//                 isrc: ''
//             },
//             external_urls: {
//                 spotify: ''
//             },
//             href: '',
//             id: '',
//             is_local: false,
//             name: '',
//             popularity: 0,
//             preview_url: '',
//             track_number: 0,
//             type: '',
//             uri: ''
//         }
//     ]
    
// }
// }
// }

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

  // searchForTrack(search:string){
  //   this.getPlay.search(search).subscribe((data:Tracks)=> this.searched={
  //     href: data['track.item.href'],
  //     items: data['Item'],
  //     limit: data['limit'],
  //     next: data['next'],
  //     offset: data['offset'],
  //     previous: data['previous'],
  //     total: data['total']
      
  //       }) 
  //     console.log(this.searched)
  //     //console.log(data)
  //   }
  
    searchedForTrack(search:string){
      this.getPlay.search(search).subscribe((data:TrackJson)=> this.searched1={
        tracks: data['tracks']

      })
      console.log(this.searched1.tracks.items[0].id)
    }

    // searchedForTrack(search:string){
    //   this.getPlay.search(search).subscribe((data:Item)=> this.searched1={

    //     album: data['album'],
    //     artists: data['Artist2[]'],
    //     available_markets: data['available_markets[]'],
    //     disc_number: data['disk_number'],
    //     duration_ms: data['duration_ms'],
    //     explicit: data['explicit'],
    //     external_ids: data['external_ids'],
    //     external_urls: data['external_urls'],
    //     href: data['href'],
    //     id: data['id'],
    //     is_local: data['is_local'],
    //     name: data['name'],
    //     popularity: data['popularity'],
    //     preview_url: data['preview_url'],
    //     track_number: data['track_number'],
    //     type: data['type'],
    //     uri: data['uri']


    //   })
    //   console.log(this.searched1);
    // }
  


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
