import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";

import 'rxjs/add/operator/map';

@Injectable()
export class DataService {


  constructor(public http: Http) {
    console.log('Data Service Connected...');
  }

  //LOGIN
  adminLogin(LoginDetail: any) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post('http://localhost:50263/api/Login/', JSON.stringify(LoginDetail), options)
      .map(res => res.json());
    //  return this.http.post('http://localhost:58077/api/Login/', JSON.stringify(LoginDetail), options)
    //     .map(res => res.json());
  }


  //POST
  postStudent(registerStudent: any) {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:50263/api/Student/', JSON.stringify(registerStudent), options)
      .map(res => res.json());
  }
}
