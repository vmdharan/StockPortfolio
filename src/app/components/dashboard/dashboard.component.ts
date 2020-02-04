import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';

export class ScoreCardData {
  public score: number;
  public info: string;
  public bgColor: string;
}

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  sc1: ScoreCardData = {
    score: 8,
    info: "Sectors diversified",
    bgColor: "#06d289"
  };

  sc2: ScoreCardData = {
    score: 14,
    info: "Different companies in holding",
    bgColor: "#0689d2"
  };

  sc3: ScoreCardData = {
    score: 20,
    info: "Transactions this month",
    bgColor: "#e9c262"
  };

  sc4: ScoreCardData = {
    score: 24000,
    info: "Holding value",
    bgColor: "#89d206"
  };

  sc5: ScoreCardData = {
    score: 195,
    info: "Brokerage costs this month",
    bgColor: "#d20634"
  };

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = [
    ['REITs'], ['Banking and Finance'], 'Materials', 
    ['Industrial'], ['IT & Telecommunications'], ['Consumer Staple'],
    ['Consumer Discretionary'], ['Energy']
  ];
  public pieChartData: number[] = [
    1000, 5000, 3000, 2000, 1000, 3000, 3000, 3000, 3000
  ];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: [
        'rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)',
        'rgba(155,0,0,0.3)', 'rgba(0,155,0,0.3)', 'rgba(0,0,155,0.3)',
        'rgba(55,0,0,0.3)', 'rgba(0,55,0,0.3)', 'rgba(0,0,55,0.3)'
    ],
    },
  ];


  public lineChartData: ChartDataSets[] = [
    { data: [
      1.10, 1.11, 1.12, 1.14, 1.15, 1.15, 1.15, 1.14, 1.14, 1.15,
      1.16, 1.16, 1.12, 1.13, 1.15, 1.17, 1.19, 1.10, 1.08, 1.01,
      0.98, 1.03, 1.02, 1.08, 1.11, 1.05, 1.15, 1.10, 1.11, 1.12, 1.16
    ], label: 'Holding value' }
  ];
  public lineChartLabels: Label[] = [
   '1', '2', '3', '4', '5', '6,', '7', '8', '9', '10',
   '11', '12', '13', '14', '15', '16,', '17', '18', '19', '20',
   '21', '22', '23', '24', '25', '26,', '27', '28', '29', '30', '31' 
  ];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(72,196,92,0.3)',
      borderColor: 'rgba(72,96,192,0.3)',
      pointBackgroundColor: 'rgba(72,96,192,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(72,96,192,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  constructor() { }

  ngOnInit() {
  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
