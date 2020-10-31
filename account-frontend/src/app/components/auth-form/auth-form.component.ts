import { LoginOdt } from './../../models/LoginOdt';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {

  profileForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  valider(): void {
    const profile: LoginOdt = {
      usernameOrEmail: this.profileForm.value.username,
      password: this.profileForm.value.password,
    };
    this.authService.signin(profile).subscribe(message => {
      this.router.navigate(['/account']);
    }, error => {

    });
  }


}
