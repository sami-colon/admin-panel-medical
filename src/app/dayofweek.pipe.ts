import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'dayOfWeek'
})

export class DayOfWeek implements PipeTransform {
  transform(value: any, ...args): string {
    if (value === 1) {
      return 'Monday';
    }
    if (value === 2) {
      return 'Tuesday';
    }
    if (value === 3) {
      return 'Wednesday';
    }
    if (value === 4) {
      return 'Thursday';
    }
    if (value === 5) {
      return 'Friday';
    }
    if (value === 6) {
      return 'Saturday';
    }
    if (value === 0) {
      return 'Sunday';
    }
  }
}
