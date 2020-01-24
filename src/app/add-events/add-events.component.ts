import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.css']
})
export class AddEventsComponent implements OnInit {

  constructor() { }
  eventName = '';
  eventDate = '';
  eventAddress = '';
  eventDescription = '';
  age = '';
  cardType = '';
  documentsRequired = '';
  ngOnInit() {
  }

  onSubmit(form): string {
    console.log(this.eventName, this.eventDescription, this.eventDate, this.eventAddress, this.age, this.documentsRequired);
    alert('Event Added');
    return '';
  }
}
