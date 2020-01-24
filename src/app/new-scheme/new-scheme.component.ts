import { Component, OnInit } from '@angular/core';
import { BasicService } from '../basic.service';

@Component({
  selector: 'app-new-scheme',
  templateUrl: './new-scheme.component.html',
  styleUrls: ['./new-scheme.component.css']
})
export class NewSchemeComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor(private _basicScheme: BasicService) { }
  scheme = {name: '', type: '', date: '', description: '', ageGroup: '', state: 'none', features: '', link: ''};
  ngOnInit() {
  }
  onSubmit(form) {
    this._basicScheme.addScheme(this.scheme).subscribe((data) => { alert('Scheme Added Successfully! '); },
                                                       (err) => { alert(' Something went wrong try again!'); });
  }
}
