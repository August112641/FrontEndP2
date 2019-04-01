import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
