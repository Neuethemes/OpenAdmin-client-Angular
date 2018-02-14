import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { AuthComponent } from './auth.component';

const authRoutes: Routes = [
  {
    path: 'login',
    component: AuthComponent,
    children: [{
      path: '',
      component: LoginComponent
    }]
  },
  {
    path: 'register',
    component: AuthComponent,
    children: [{
      path: '',
      component: RegisterComponent
    }]
  },
  {
    path: 'logout',
    redirectTo: '/login',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule {
}
