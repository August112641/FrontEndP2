import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(private userService: UserService) { }
  
  User: object[] = [];
  id : number = 0;
  ngOnInit() {
  }

  getUser(){
    this.userService.getUser(this.id)
    .subscribe((response)=>{
      this.User = response;
      console.log(this.User);
      return this.User;
    });
    
  }


}
