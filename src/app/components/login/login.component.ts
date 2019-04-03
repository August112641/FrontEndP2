import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  User: User = {
      id : null,
      email : '',
      password : '',
      playlistid: null
  }

  hide: boolean = false; 

  showForm(){
    if(this.hide == false){
      this.hide = true;
    }else
    this.hide = false;
  
  }

  login(event) {
    event.preventDefault()
    const target = event.target
    this.User.email = target.querySelector('#email').value
    this.User.password = target.querySelector('#password').value
    this.userService.loginUser(this.User).subscribe((response) => {
      console.log(response);
    })
  }

}
