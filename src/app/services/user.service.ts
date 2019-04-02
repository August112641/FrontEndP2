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
<<<<<<< HEAD
=======
  
>>>>>>> 2f5fe576621b5b7ff5b4d38965861a06c5eec76a

  getColumns(): string[] {
    return ["id", "stuff", "otherstuff", "morestuff"]
  };
<<<<<<< HEAD

  login() {
    console.log("loggin in...");
    return this.http.post<User>(this.url);
  }
=======
>>>>>>> 2f5fe576621b5b7ff5b4d38965861a06c5eec76a
}