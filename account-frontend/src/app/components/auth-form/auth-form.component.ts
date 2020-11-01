import { LoginOdt } from './../../models/LoginOdt';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {

  private duration = 5000;
  private horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  private verticalPosition: MatSnackBarVerticalPosition = 'top';
  public showProgressBar: boolean;

  profileForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  valider(): void {
    this.showProgressBar = true;
    const profile: LoginOdt = {
      usernameOrEmail: this.profileForm.value.username,
      password: this.profileForm.value.password,
    };
    this.authService.signin(profile).subscribe(message => {
      this.openSnackBar(`Welcome`);
      this.router.navigate(['/account']);
    }, error => {
      this.openSnackBarError('Username or password incorrect', 'Ok');
    }, () => {this.showProgressBar = false;});
  }

  private openSnackBar(message: string): void {
    this.snackBar.open(message, 'Thanks', {
      duration: this.duration,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }

  private openSnackBarError(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: this.duration
    });
  }

}
