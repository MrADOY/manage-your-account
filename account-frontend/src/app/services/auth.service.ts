import { environment } from './../../environments/environment';
import { LoginOdt } from './../models/LoginOdt';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { JwtAuthenticationResponseOdt } from '../models/JwtAuthenticationResponseOdt';
import { SignUpOdt } from '../models/SignUpOdt';
import { tap } from 'rxjs/operators';
import { UserInfo } from '../models/UserInfo';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUser$: Subject<UserInfo> = new Subject<UserInfo>();

  constructor(private http: HttpClient) { }

  public signin(login: LoginOdt): Observable<JwtAuthenticationResponseOdt> {
    return this.http.post<JwtAuthenticationResponseOdt>(`${environment.urlBackend}/api/auth/signin`, login)
    .pipe(tap(token => this.setSession(token)));
  }

  public register(register: SignUpOdt): Observable<JwtAuthenticationResponseOdt> {
    return this.http.post<JwtAuthenticationResponseOdt>(`${environment.urlBackend}/api/auth/signup`, register);
  }

  private setSession(authResult: JwtAuthenticationResponseOdt): void {
    localStorage.setItem('accessToken', authResult.accessToken);

    this.http.get(`${environment.urlBackend}/api/auth/user/me`)
    .subscribe((user: UserInfo) => {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUser$.next(user);
    },
      error => {
        console.log(error);
    });
  }

  public isLoggedIn(): boolean {
    return !!localStorage.getItem('accessToken');
  }

  public getCurrentUser(): UserInfo {
    return JSON.parse(localStorage.getItem('currentUser')) as UserInfo;
  }

  public logout(): void {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('currentUser');
  }

}
