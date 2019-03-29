import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/loginService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myData: any;

  constructor(private loginService: LoginServiceService) { }

  ngOnInit() {}


  login() {
    this.loginService.login().subscribe((res: any) => {
      alert("Success!");
      this.myData=res.data;
      console.log('res is ', res.data);
    });
  }

}
