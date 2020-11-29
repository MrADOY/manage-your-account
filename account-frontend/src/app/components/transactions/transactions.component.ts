import { UserService } from './../../services/user.service';
import { AccountService } from './../../services/account.service';
import { Component, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { TransactionOdt } from 'src/app/models/TransactionsOdt';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'amount', 'fromWho', 'date', 'transactionType', 'transactionDate'];
  dataSource: MatTableDataSource<TransactionOdt> = new MatTableDataSource([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  transactions: TransactionOdt[];

  constructor(private userService: UserService, private accountService: AccountService) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.userService.accountSelected.pipe(
      mergeMap(account => this.accountService.getTransactionsOfAccount(account.id))
    ).subscribe(transactions => {
      this.dataSource.data = transactions;
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


