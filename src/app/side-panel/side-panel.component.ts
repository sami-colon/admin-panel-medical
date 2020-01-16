import { Component, OnInit } from '@angular/core';
import {DayOfWeek} from '../dayofweek.pipe';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css']
})
export class SidePanelComponent implements OnInit {

  constructor() { }
  date = new Date();

  ngOnInit() {
  }

  getDate(): any {
    return this.date;
  }
}
