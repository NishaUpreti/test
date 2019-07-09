import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http: HttpClient) {

  }
  configurl = 'https://jsonplaceholder.typicode.com/users';
  getconfig() {
    return this.http.get(this.configurl);
  }
}
