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
    { data: [330, 600, 0, 260], label: 'Hospital A' },
    { data: [120, 455, 100, 340], label: 'Hospital B' },
    { data: [45, 67, 800, 500], label: 'Hospital C' },
    { data: [2, 78, 50, 100], label: 'Hospital D' }
  ];

  chartLabels = ['January', 'February', 'March', 'April'];


  constructor() { }

  ngOnInit() {
  }

}
