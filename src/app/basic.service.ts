import {Injectable} from '@angular/core';
import {interval} from 'rxjs';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BasicService {
  constructor(private http: HttpClient) {
  }
  ADDSCHEMEAPIURL = '';
  getPulse(): any {
    return interval(1000);
  }
  addScheme(scheme): Observable<any> {
    return this.http.post(this.ADDSCHEMEAPIURL, scheme);
  }
}
