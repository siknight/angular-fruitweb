import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './list/list.component';
import {UpdateComponent} from './update/update.component';
import {AddComponent} from './add/add.component';
import {DetailComponent} from './detail/detail.component';
import {LoginComponent} from './login/login.component';
import {NavbarComponent} from './navbar/navbar.component';

const routes: Routes = [

   { path: 'fruits', component: ListComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'add', component: AddComponent },
  { path: 'login', component: LoginComponent },
  {path: 'update/:id', component: UpdateComponent},
  {path: 'fruits/:id', component: DetailComponent}, // GetMapping("/books/{id}")
  { path: '', redirectTo: 'fruits' , pathMatch: 'full'}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
