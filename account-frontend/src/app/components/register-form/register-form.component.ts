import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SignUpOdt } from 'src/app/models/SignUpOdt';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  private duration = 5000;
  public showProgressBar: boolean;

  profileForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(40)]],
    username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]]
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  valider(): void {
    this.showProgressBar = true;
    const profile: SignUpOdt = {
      name: this.profileForm.value.name,
      username: this.profileForm.value.username,
      email: this.profileForm.value.email,
      password: this.profileForm.value.password,
    };
    this.authService.register(profile).subscribe(message => {
      this.openSnackBar('Accound created, you can log in ✅', 'Ok');
    }, error => {
      this.openSnackBar(error.error.message, 'Ok');
    }, () => {this.showProgressBar = false;});
  }

  private openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: this.duration
    });
  }
}
