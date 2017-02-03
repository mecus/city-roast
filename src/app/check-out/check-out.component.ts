import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'check-out',
    templateUrl: './check-out.component.html',
    styleUrls: ['./check-out.module.scss']
})
export class CheckOutComponent implements OnInit {
    posts = [];
    constructor(private appService:AppService) { }

    apiData(){
        this.appService.getApiData()
            .subscribe(
                data=>this.posts = data,
                err=> console.log("ErrorData: " +JSON.stringify(err)),
                ()=>console.log('Request completed')
            );
            
    }

    ngOnInit() { 
            this.appService.getApiData()
            .subscribe(
                (data)=> {
                    this.posts = data
                },
                (err)=>{
                    console.log(err);
                },
                ()=>{
                    console.log("All Request Completed");
                }
            );
        //  console.log(this.posts);   
    }

}