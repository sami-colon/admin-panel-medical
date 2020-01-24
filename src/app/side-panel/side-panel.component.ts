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
  scheme = {name: '', type: '', description: '', ageGroup: '', state: 'none', features: '', link: ''};

  ngOnInit() {
    this._basicService.getPulse().subscribe((data) => { this.updateDate(); },
                                            (error) => { console.log('Error Occured!'); });
  }

  updateDate() {
    this.date = new Date();
  }

  addModal() {
    this.scheme.name = window.prompt('Name of Scheme');
    this.scheme.type = window.prompt('Type of Scheme');
    this.scheme.description = window.prompt('Description of Scheme');
    this.scheme.ageGroup = window.prompt('Applicable Age Group');
    this.scheme.state = window.prompt('Type State / none');
    this.scheme.features = window.prompt('Features of scheme');
    this.scheme.link = window.prompt('Link of Scheme');
    window.alert(stringify(this.scheme));
  }
}
