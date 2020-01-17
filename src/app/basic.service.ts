import {Injectable} from '@angular/core';
import {interval} from 'rxjs';

@Injectable()
export class BasicService {
  constructor() {
  }
  getPulse(): any {
    return interval(1000);
  }
}
