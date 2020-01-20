import { Component, OnInit } from '@angular/core';
import {BasicService} from '../basic.service';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent implements OnInit {

  constructor() { }
  centralSchemeTotal = 50;
  centralSchemeActive = 45;
  ngOnInit() {
  }

  getGradientClass(total, active): string {
    const per = Math.ceil(Math.ceil((active / total) * 100) / 10) * 10 ;
    return `gradient${per / 10}`;
  }
}
