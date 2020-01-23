import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-scheme',
  templateUrl: './update-scheme.component.html',
  styleUrls: ['./update-scheme.component.css']
})
export class UpdateSchemeComponent implements OnInit {

  schemeSearch = '';
  title = 'Edit Title';
  description = 'Edit Description';
  age = 'Edit Age Applicable to!';
  cardType = 'Edit Card Type applicable to!';
  region = 'Edit Scheme Region';

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formData) {
  }

}
