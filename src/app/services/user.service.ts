import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  User: object[] = [];
  id: number;
  constructor(private http: HttpClient) { }

  url: string = 'https://jsonplaceholder.typicode.com/posts';

  getUser(id: number): Observable <User[]> {
    console.log("Getting user"+id);
    return this.http.get<User[]>(this.url+"/"+id);
  }

  getColumns(): string[] {
    return ["id", "stuff", "otherstuff", "morestuff"]
  };

  login() {
    console.log("loggin in...");
    return this.http.post<User>(this.url);
  }
}