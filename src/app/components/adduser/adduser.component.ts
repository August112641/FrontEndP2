import { Component, OnInit, ElementRef } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Users2 } from 'src/app/models/user';
import { JsonPipe } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  playlistFrame: string = 'https://open.spotify.com/embed/user/1244653463/playlist/'
  


  constructor(private userService: UserService,private elementRef: ElementRef, private sanitize:DomSanitizer) { }
  

  obj = localStorage.getItem("LoggedUser");
  obj2 = JSON.parse(this.obj);
  SplaylistId = localStorage.getItem("savedPlayList")
  
  ngOnInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'lightgreen';
    this.getUser1()
    console.log(this.obj2)
    console.log(this.SplaylistId)
  }
 
currentUsers1: Users2 ={
Users1: []
}

getUser1(){
  this.userService.getUsers2().subscribe((data: [])=> this.currentUsers1={
    Users1: data
    
  })
  console.log(this.currentUsers1.Users1)
}
link: string = 'https://open.spotify.com/embed/user/1244653463/playlist/';

cleanUrl(append: string){
  return   this.sanitize.bypassSecurityTrustResourceUrl(this.link + append)
}

selectUser(sel: string){
  
  console.log(sel)
}

}