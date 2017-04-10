import { Injectable } from '@angular/core';
import { Http, Headers, ResponseOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MailService {
  apiUrl:string = "https://mailer-server.herokuapp.com/mailings.json";

  constructor(private _http:Http) { 
    
  }


  sendMail(name, email){
    let headers = new Headers();
    headers.append("Content-Type", "application/json ");
    let body = {mailing: {name: name, email: email}}
    return this._http.post(this.apiUrl, body, {headers:headers})
      .map((res:Response)=> res.json());
      
  }
   getMails(){
    let headers = new Headers();
    headers.append("Content-Type", "application/json ");

    return this._http.get(this.apiUrl, {headers:headers})
      .map((res:Response)=>res.json());

  }

}
