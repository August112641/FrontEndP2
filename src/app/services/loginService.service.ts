import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Authorization': 'Bearer '+'BQC98GSDyfV5iFnVgsXIMpNLUZrsfQy10hyjrq7zq5EqrI_js4v0AOpqzka6AT2Sxeu77iHPaXuu_L1qPfPTYpVqxydx8Ady8yeVDJXPITlq4rwACKPk5rrmtQ4RGHiG_SQ7t2KenyDKRJc'})
};

@Injectable({
  providedIn: 'root'
})

export class LoginServiceService {

  

  client_id = 'b72324b7926347dc83e63ae5d04366f4';
  response_type = 'code';
  redirect_uri = 'http://localhost:4200/callback';
  scope = 'user-read-private%20user-read-email';
  state = '34fFs29kd09'
  // urlQuery = `?client_id=${this.clientId}&response_type=code&redirect_uri=${this.redirectUri}&scope=${this.scope}&state=34fFs29kd09`;
  // url = 'https://accounts.spotify.com/authorize';
  url: string ='https://accounts.spotify.com/authorize?client_id=b72324b7926347dc83e63ae5d04366f4&response_type=code&redirect_uri=http://localhost:4200/callback&state=sdsfca&scope=user-read-private%20user-read-email';
  
  constructor(private http: HttpClient) { }

//   login(){
// // tslint:disable-next-line: max-line-length
//     return this.http.get(this.url+"?client_id="+this.client_id+"&response_type="+this.response_type+"&redirect_uri="+this.redirect_uri+"&scope="+this.scope+"&state="+this.state,);
//   }

  login() {
    // tslint:disable-next-line: max-line-length
        return this.http.get(this.url, httpOptions);
      }

}
