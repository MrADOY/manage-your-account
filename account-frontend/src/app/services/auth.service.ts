import { environment } from './../../environments/environment';
import { LoginOdt } from './../models/LoginOdt';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject, of } from 'rxjs';
import { JwtAuthenticationResponseOdt } from '../models/JwtAuthenticationResponseOdt';
import { SignUpOdt } from '../models/SignUpOdt';
import { tap } from 'rxjs/operators';
import { UserInfo } from '../models/UserInfo';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUser$: Subject<UserInfo> = new BehaviorSubject<UserInfo>(null);

  constructor(private http: HttpClient, private router: Router) { }

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

  public getCurrentUser(): Observable<UserInfo> {
    const userInfo = JSON.parse(localStorage.getItem('currentUser')) as UserInfo;
    if (userInfo) {
      return of(userInfo);
    } else {
      return this.currentUser$;
    }
  }

  public isLoggedIn(): boolean {
    return !!localStorage.getItem('accessToken');
  }

  public logout(): void {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('currentUser');
      this.router.navigate(['/login']);
  }
}
