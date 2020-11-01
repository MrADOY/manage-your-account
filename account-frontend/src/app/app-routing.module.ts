import { AccountComponent } from './components/account/account.component';
import { AppComponent } from './app.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsSignedInGuard } from './guard/IsSignedInGuard';
import { IsNotSignedInGuard } from './guard/IsNotSignedInGuard';

const routes: Routes = [
  {path: 'login', component: AuthFormComponent, canActivate: [IsNotSignedInGuard]},
  {path: 'signup', component: RegisterFormComponent, canActivate: [IsNotSignedInGuard]},
  {path: 'account', component: AccountComponent, canActivate: [IsSignedInGuard]},
  {path: '',   redirectTo: 'account', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

