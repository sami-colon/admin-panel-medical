import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.css']
})
export class AddEventsComponent implements OnInit {

  constructor() { }
  eventName = 'event Name';
  eventDate = '';
  eventAddress = 'Address';
  eventDescription = 'Description';
  age = '1-100';
  cardType = 'Everyone';
  documentsRequired = 'Documents';
  ngOnInit() {
  }

  onSubmit(nameModel, descModel, addressModel, ageModel, cardTypeModel, docsRequirementsModel, eventDateModel): string {
    // nameModel, descModel, addressModel, ageModel, cardTypeModel, docsRequirementsModel, eventDateModel
    // tslint:disable-next-line:max-line-length
    console.log(nameModel.value, descModel.value, addressModel.value, ageModel.value, cardTypeModel.value, docsRequirementsModel.value, eventDateModel.value);
    return '';
  }
}
