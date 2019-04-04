import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User, Users, Users2 } from '../models/user';


@Injectable({
  providedIn: 'root'
})


export class UserService {

  HttpOptions = {headers: new HttpHeaders ({'Content-Type': 'application/json'})}
  id:number;

  loginUrl = 'http://3.83.115.122:8085/MVCBackEnd/users/login';
  addUrl = 'http://3.83.115.122:8085/MVCBackEnd/users'

  
  constructor(private http: HttpClient) { }

    getUsers2(): Observable <Object[]>{
      return this.http.get<Object[]>(this.addUrl)
    }
  

  getUser(id: number): Observable <User[]> {
    console.log("Getting user"+id);
    return this.http.get<User[]>(this.addUrl+"/"+id);
  }

  getColumns(): string[] {
    return ["id", "stuff", "otherstuff", "morestuff"]
  };

  addUser(User): Observable<User>{
    console.log("Registering..."+User.email); 
    return this.http.post<User>(this.addUrl, User, this.HttpOptions);
  }

  loginUser(User): Observable<User>{
    console.log("loggin in..."+User.email); 
    return this.http.post<User>(this.loginUrl, User, this.HttpOptions);
  }

}