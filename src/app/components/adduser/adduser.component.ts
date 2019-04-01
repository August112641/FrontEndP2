import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(private userService: UserService) { }
  
<<<<<<< HEAD
  Users: object[] = [];
=======
  User: object[] = [];
>>>>>>> 2f5fe576621b5b7ff5b4d38965861a06c5eec76a
  id : number = 0;
  ngOnInit() {
  }

  getUser(){
    this.userService.getUser(this.id)
    .subscribe((response)=>{
<<<<<<< HEAD
      this.Users = response;
      console.log(this.Users);
      return this.Users;
=======
      this.User = response;
      console.log(this.User);
      return this.User;
>>>>>>> 2f5fe576621b5b7ff5b4d38965861a06c5eec76a
    });
    
  }

<<<<<<< HEAD
  displayUsers(){
    this.Users[0] = this.userService.getUser(this.id);
    return this.Users;
    //all data in mock-data.ts
    }

=======
>>>>>>> 2f5fe576621b5b7ff5b4d38965861a06c5eec76a

}
