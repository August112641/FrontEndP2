import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { AdduserComponent } from './components/adduser/adduser.component';
import { NewplaylistComponent } from './components/newplaylist/newplaylist.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: NewplaylistComponent
  },
  {
    path: 'users',
    component: AdduserComponent
  },
  // {
  //   path: 'login',
  //   component: 
  // }
    

];
=======

const routes: Routes = [];
>>>>>>> 2f5fe576621b5b7ff5b4d38965861a06c5eec76a

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
