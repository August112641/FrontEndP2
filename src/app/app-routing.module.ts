import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdduserComponent } from './components/adduser/adduser.component';
import { NewplaylistComponent } from './components/newplaylist/newplaylist.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: 'playlist',
    component: NewplaylistComponent
  },
  {
    path: 'users',
    component: AdduserComponent
  },
  {
    path: 'logout',
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
