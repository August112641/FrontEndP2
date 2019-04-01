import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(private userService: UserService) { }
  
  Users: object[] = [];
  id : number = 0;
  ngOnInit() {
  }

  getUser(){
    this.userService.getUser(this.id)
    .subscribe((response)=>{
      this.Users = response;
      console.log(this.Users);
      return this.Users;
    });
    
  }

  displayUsers(){
    this.Users[0] = this.userService.getUser(this.id);
    return this.Users;
    //all data in mock-data.ts
    }


}
