import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  chartOptions = {
    responsive: true
  };

  chartData = [
    { data: [330, 600, 70, 260, 45, 200, 240, 65, 89, 180, 550, 320], label: 'Hospital A' },
    { data: [120, 455, 100, 340, 65, 59, 80, 81, 56, 55, 40, 90], label: 'Hospital B' },
    { data: [45, 67, 800, 500, 180, 480, 770, 90, 1000, 270, 400, 45], label: 'Hospital C' },
    { data: [202, 152, 150, 100, 330, 600, 70, 260, 45, 200, 240, 65], label: 'Hospital D' }
  ];

  chartLabels = ['January', 'February', 'March', 'April', 'May', 'June'];

  public lineChartColors: Color[] = [
    { // red
      // backgroundColor: 'rgba(104,102,229,0.2)',
      backgroundColor: 'rgba(240, 0, 0, 0.2)',
      borderColor: 'transparent',
      pointBackgroundColor: 'rgba(104,102,229,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // green
      // backgroundColor: 'rgba(114,211,156,0.2)',
      backgroundColor: 'rgba(0,205,150, 0.3)',
      borderColor: 'transparent',
      pointBackgroundColor: 'rgba(114,211,156,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // magenta
      backgroundColor: 'rgba(119,166,205,0.4)',
      borderColor: 'transparent',
      pointBackgroundColor: 'rgba(119,166,205,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // purple
      backgroundColor: 'rgba(204,205,249,0.5)',
      borderColor: 'transparent',
      pointBackgroundColor: 'rgba(204,205,249,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // yellow
      backgroundColor: 'rgba(253,250,125,0.3)',
      borderColor: 'transparent',
      pointBackgroundColor: 'rgba(253,250,125,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // golden
      backgroundColor: 'rgba(249,214,83,0.3)',
      borderColor: 'transparent',
      pointBackgroundColor: 'rgba(249,214,83,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
