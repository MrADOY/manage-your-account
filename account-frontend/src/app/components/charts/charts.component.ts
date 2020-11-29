import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { AccountOdt } from 'src/app/models/AccountOdt';
import { AccountService } from 'src/app/services/account.service';
import { mergeMap } from 'rxjs/operators';
import { TransactionType } from 'src/app/models/TransactionsOdt';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  public accountSelected: AccountOdt;
  private dataLegend: any = [];
  private data: any[] = [];
  public traitmentFinished: boolean;

  color: ThemePalette = 'primary';
  updateOptions: any;

  options = {

  };

  onChartEvent(event: any): void {
    console.log('chart event:', event);
  }

  constructor(private userService: UserService, private accountService: AccountService) { }

  ngOnInit(): void {

    this.userService.accountSelected.pipe(
      mergeMap(account => this.accountService.getTransactionsOfAccount(account.id))
    ).subscribe(transactions => {

      // Get different type of transaction
      this.dataLegend = transactions.map(t => TransactionType[t.transactionType])
        .filter((value, index, self) => self.indexOf(value) === index);

      // Get total for each type of transaction
      this.data = this.dataLegend.map(l => {
        return { name: l, value: transactions.filter(t => t.transactionType === TransactionType[l])
          .reduce((sum, current) => sum + current.amount, 0) };
      });

      console.log(this.dataLegend);
      console.log(this.data);
      this.updateOptions = {
        title: {
          text: 'Expense chart',
          left: 'center',
          textStyle: {
            fontSize: '30',
            fontWeight: 'bold'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          show: true,
          orient: 'horizontal',
          bottom: 10,
          data: this.dataLegend,
          itemWidth: 50,
          itemHeight: 30,
          textStyle: {
            fontSize: '15',
            fontWeight: 'bold'
          }
        },
        series: [
          {
            name: 'Expense',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: true
            },
            data: this.data
          }
        ]
      };
      this.traitmentFinished = true;
    });
  }
}
