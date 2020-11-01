import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  options = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        show: false,
        orient: 'vertical',
        left: 10,
        data: ['Loyer', 'Nourriture', 'Divers', 'Loisirs', 'Factures']
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
                {value: 335, name: 'Loyer'},
                {value: 310, name: 'Nourriture'},
                {value: 234, name: 'Divers'},
                {value: 135, name: 'Loisirs'},
                {value: 1548, name: 'Factures'}
            ]
        }
    ]
  };

  ngOnInit(): void {

  }

  onChartEvent(event: any) {
    console.log('chart event:', event);
}





}
