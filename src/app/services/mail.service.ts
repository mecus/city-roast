import { Injectable } from '@angular/core';
import { Http, Headers, QueryEncoder, ResponseOptions, Response } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MailService {
  apiUrl:string = "https://mailer-server.herokuapp.com/mailings.json";
  welcomeUrl = "http://localhost:5000/welcome"; //"https://londoncityroast.com/welcome";
  orderUrl = "https://londoncityroast.com/success_order";
  constructor(private _http:HttpClient) { 
    
  }


  sendWelcomeMail(email){
    let queryData = new HttpParams();
    queryData.set("email", email)
    console.log(queryData);
    return this._http.get("http://localhost:5000/welcome");
      
  }
  sendOrderSuccessMail(user){
    let headers = new HttpHeaders();
    headers.set("Content-Type", "application/json ");
    
        return this._http.post(this.orderUrl, user, {headers:headers})
          .map((res:Response)=>res.json());
  }

}
