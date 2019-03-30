import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(private userService: UserService) { }
  
  user: User;
  id : number = 0;
  ngOnInit() {
  }

  getUser(){
    this.userService.getUser(this.id)
    .subscribe((user: User)=>{
      this.user = user;
      console.log(this.user);
    });
  }



}
