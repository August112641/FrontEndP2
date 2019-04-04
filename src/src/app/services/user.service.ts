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

  private url= 'https://jsonplaceholder.typicode.com/posts';
  loginUrl = 'http://192.168.60.102:8082/MVCBackEnd/users';

  
  constructor(private http: HttpClient) { }

    getUsers2(): Observable <Object[]>{
      return this.http.get<Object[]>(this.loginUrl)
    }
  

  getUser(id: number): Observable <User[]> {
    console.log("Getting user"+id);
    return this.http.get<User[]>(this.url+"/"+id);
  }


  getColumns(): string[] {
    return ["id", "stuff", "otherstuff", "morestuff"]
  };


  loginUser(User): Observable<User>{
    console.log("loggin in..."+User); 
    return this.http.post<User>(this.loginUrl, User, this.HttpOptions);
  }

}