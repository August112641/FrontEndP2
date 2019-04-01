import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  id: number;
  Users: Observable<[]>;
  columns: string[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.columns = this.userService.getColumns(); 
  //["name", "age", "species", "occupation"]
    
  }
 
  displayUsers(){
    this.Users[0] = this.userService.getUser(this.id);
    return this.Users;
    //all data in mock-data.ts
    }

}
