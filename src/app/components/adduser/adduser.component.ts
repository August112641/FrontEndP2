import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Users2 } from 'src/app/models/user';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(private userService: UserService) { }
  
  ngOnInit() {
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

}