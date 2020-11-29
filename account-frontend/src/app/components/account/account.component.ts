import { AccountOdt } from './../../models/AccountOdt';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  public selected: AccountOdt;
  public accounts: AccountOdt[];

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.userService.getAccountOfUser().subscribe(accounts => {
      this.accounts = accounts;
    });
  }

  onSelectChange(event: MatSelectChange): void {
    this.userService.changeAccount(event.value);
  }

}
