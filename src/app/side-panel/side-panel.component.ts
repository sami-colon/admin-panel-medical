import { Component, OnInit } from '@angular/core';
import {DayOfWeek} from '../dayofweek.pipe';
import {BasicService} from '../basic.service';
import {stringify} from 'querystring';
declare var jQuery: any;

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css']
})
export class SidePanelComponent implements OnInit {

  constructor(private _basicService: BasicService) { }
  date = new Date();
  scheme = {name: '', state: ''};

  ngOnInit() {
    this._basicService.getPulse().subscribe((data) => { this.updateDate(); },
                                            (error) => { console.log('Error Occured!'); });
  }

  updateDate() {
    this.date = new Date();
  }

  addModal() {
    this.scheme.name = window.prompt('Enter Scheme');
    this.scheme.state = window.prompt('Enter State');
    window.alert(stringify(this.scheme));
  }
}
