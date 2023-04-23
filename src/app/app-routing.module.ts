import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

const routes: Routes = [
  {
    component : SignupComponent,
    path:"signup"
  },
  {
    component : SignupComponent,
    path:""
  },
  {
    component:LoginComponent,
    path:"login"
  },
  {
    component:ForgetPasswordComponent,
    path:"forget-password"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
