import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SignUpOdt } from 'src/app/models/SignUpOdt';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  profileForm = this.fb.group({
    name: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
  }

  valider(): void {
    const profile: SignUpOdt = {
      name: this.profileForm.value.name,
      username: this.profileForm.value.username,
      email: this.profileForm.value.email,
      password: this.profileForm.value.password,
    };
    this.authService.register(profile).subscribe(message => {

    }, error => {

    });
  }

}
