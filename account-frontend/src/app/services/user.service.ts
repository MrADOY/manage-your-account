import { AccountOdt } from './../models/AccountOdt';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInfo } from '../models/UserInfo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public accountSelected: Subject<AccountOdt> = new BehaviorSubject(null);

  constructor(private http: HttpClient, private auth: AuthService) { }

  public getAccountOfUser(): Observable<AccountOdt[]> {
    const userInfo: UserInfo = this.auth.getCurrentUser();
    return this.http.get<AccountOdt[]>(`${environment.urlBackend}/api/user/${userInfo.id}/accounts`);
  }

  public changeAccount(account: AccountOdt): void {
    this.accountSelected.next(account);
  }
}
