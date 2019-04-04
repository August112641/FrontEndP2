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
      id: null, 
      email : '',
      password : '',
      playlistId: ''  
  }

  hide: boolean = true; 
  
  showForm(){
    if(this.hide == true){
      this.hide = false;
    } else if (this.hide == false) {
      this.hide = true;
    } else {
      return;
    }
      
  }

  login(event) {
      
      event.preventDefault()
      const target = event.target
      this.User.email = target.querySelector('#email').value
      this.User.password = target.querySelector('#password').value
      this.userService.loginUser(this.User).subscribe((response) => {
          console.log(response );
          console.log(response);
          localStorage.setItem("LoggedUser",JSON.stringify(response))
          })
    }

    addUser(event) {
      event.preventDefault()
      const target = event.target
      this.User.email = target.querySelector('#email').value
      this.User.password = target.querySelector('#password').value
      this.userService.addUser(this.User).subscribe((response) => {
        console.log(response );
        })

    }

}