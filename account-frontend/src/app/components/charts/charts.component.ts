import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  color: ThemePalette = 'primary';
  isChecked = false;
  updateOptions: any;

  options = {
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
      show: this.isChecked,
      orient: 'horizontal',
      bottom: 10,
      data: ['Loyer', 'Nourriture', 'Divers', 'Loisirs', 'Factures'],
      itemWidth: 50,
      itemHeight: 30,
      textStyle: {
        fontSize: '15',
        fontWeight: 'bold'
      }
    },
    series: [
      {
        name: 'Dépenses',
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
        data: [
          { value: 335, name: 'Loyer' },
          { value: 310, name: 'Nourriture' },
          { value: 234, name: 'Divers' },
          { value: 135, name: 'Loisirs' },
          { value: 1548, name: 'Factures' }
        ]
      }
    ]
  };

  onChartEvent(event: any) {
    console.log('chart event:', event);
  }

  toggleSwitched(event: any) {
     this.updateOptions = {
      legend: {
        show: event.checked,
      },
    };
  }
  constructor() { }

  ngOnInit(): void {
  }



}
