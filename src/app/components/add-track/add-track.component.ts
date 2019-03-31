import { Component, OnInit } from '@angular/core';
import { GetPlayService } from '../../services/get-play.service';


@Component({
  selector: 'app-add-track',
  templateUrl: './add-track.component.html',
  styleUrls: ['./add-track.component.css']
})
export class AddTrackComponent implements OnInit {

  currentTrack: Track = {
      trackId: "6Ps04Nfh2PySU4fIPZWxrU",
      album: [],
      name: []

  }

  constructor(private getPlay: GetPlayService) { }

  ngOnInit() {
  }

  addATrack(playlist:string, track:string){
    this.getPlay.addTrack(playlist, this.currentTrack.trackId).subscribe((data: Track)=>this.currentTrack={
      trackId: data['id'],
      album: data['album'],
      name: data['name']
    })
  }


}
