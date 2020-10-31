import { AccountComponent } from './components/account/account.component';
import { AppComponent } from './app.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsSignedInGuard } from './guard/IsSignedInGuard';

const routes: Routes = [
  {path: 'login', component: AuthFormComponent},
  {path: 'signup', component: RegisterFormComponent},
  {path: 'account', component: AccountComponent, canActivate: [IsSignedInGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

