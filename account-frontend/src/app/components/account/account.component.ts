import { filter, mergeMap } from 'rxjs/operators';
import { AccountOdt } from './../../models/AccountOdt';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  public selected: AccountOdt;
  public accounts: AccountOdt[];

  constructor(private authService: AuthService, private userService: UserService) {

  }

  ngOnInit(): void {
    this.authService.getCurrentUser().pipe(
      filter(user => user !== null),
      mergeMap(user => {
        return this.userService.getAccountOfUser(user.id);
      })).subscribe(accounts => {
        this.accounts = accounts;
      });
  }

  onSelectChange(event: MatSelectChange): void {
    this.userService.changeAccount(event.value);
  }

}
