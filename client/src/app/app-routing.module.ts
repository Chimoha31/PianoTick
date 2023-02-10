import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from '../app/pages/login/login.component';
import {RegisterComponent} from '../app/pages/register/register.component';
import {SetupComponent} from '../app/pages/setup/setup.component';
import {MainComponent} from '../app/pages/main/main.component';

const routes: Routes = [
  {path: '', redirectTo: "/login", pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'setup', component: SetupComponent},
  {path: 'main', component: MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
