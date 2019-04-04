import { Component, OnInit, ElementRef } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private elementRef: ElementRef, private route: Router) { }

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
    } else {
      this.hide = true;
    }
  }

  login(event) {
      
      event.preventDefault()
      const target = event.target
      this.User.email = target.querySelector('#email').value
      this.User.password = target.querySelector('#password').value
      this.userService.loginUser(this.User).subscribe((response) => {
          console.log(response + "logged in");
          if(response[0]){
            this.route.navigateByUrl("/playlist");
          }
          
          })
        
        
    }

    addUser(event) {
      event.preventDefault()
      const target = event.target
      this.User.email = target.querySelector('#email').value
      this.User.password = target.querySelector('#password').value
      this.User.playlistId = 'placeholder';
      this.userService.addUser(this.User).subscribe((response) => {
        console.log(response + "registered");
        })

    }

}
