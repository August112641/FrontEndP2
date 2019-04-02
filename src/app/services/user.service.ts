import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  HttpOptions = {headers: new HttpHeaders ({'Content-Type': 'application/json'})}
  id: number;
  constructor(private http: HttpClient) { }

  url: string = 'https://jsonplaceholder.typicode.com/posts';
  loginUrl = 'http://192.168.60.102:8082/MVCBackEnd/users'

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