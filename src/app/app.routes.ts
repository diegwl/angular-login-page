import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

export const routes: Routes = [
  {
    path: "login",
    component: LoginPageComponent
  },
  {
    path: "signup",
    component: SignupPageComponent
  }
];
