import { Component, OnInit, ElementRef } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private elementRef: ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'black';
  }

  User: User = {
      id : null,
      Email : '',
      Password : '',
      playlistid: null
  }

  hide: boolean = true; 
  btncontent: string = 'Signup';
  
  showForm(){
    if(this.hide == true){
      this.hide = false;
      this.btncontent = 'register'
    } else if (this.hide == false) {
      this.hide = true;
      this.btncontent = 'Signup';
    } else {
      return;
    }
      
  }

  login(event) {

    if(this.btncontent != 'Signup'){
      console.log(this.btncontent);
      return;
    }
    
  
    event.preventDefault()
    const target = event.target
    this.User.Email = target.querySelector('#email').value
    this.User.Password = target.querySelector('#password').value
    this.userService.loginUser(this.User).subscribe((response) => {
      console.log(response);
    })
  }

}