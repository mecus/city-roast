import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import * as _ from 'lodash';

@Component({
    selector: 'transact-sales',
    templateUrl: 'transaction.component.html',
    styleUrls: ['transaction.component.scss']
})

export class TransactionComponent implements OnInit {
    page: Number = 1;
    pageSize = 5;
    transactions$;
    constructor(private orderService: OrderService){}

    ngOnInit(){
        this.orderService.getTransactions()
        .subscribe(transact=>{
            this.transactions$ = _.reverse(transact);
        })
    }

}