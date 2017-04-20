import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
    selector: 'ord-success',
    templateUrl: './html/order-success.component.html',
    styleUrls: ['./styles/order-success.component.scss', './styles/stylesheet.scss']
})
export class OrderSuccessComponent implements OnInit {
    // public orderPal;
    public deleteOrder;
    public itemKeys;
    public orderKeys;

    constructor(private cartService:CartService, private router:Router) { }

    successUpdate(){
        this.updateStatus();
        this.deleteTempOrder();
        this.cartService.clear();
    }
    //Deleting Temporary order after a successful transaction
     deleteTempOrder(){       
        // this.itemKeys.forEach((item)=>{ 
        //     this.cartService.deleteOrderItems(item.$key);
        // });
        this.cartService.deleteAllOrder(this.orderKeys.$key);
        this.cartService.deleteOrder();
    }
    updateStatus(){
        this.cartService.patchFinalOrder((localStorage.getItem("returnId").toString())).subscribe((res)=>{
            console.log(res);
            localStorage.removeItem("returnId");
        });
    }

    ngOnInit() {
        //use idToken to check for current user
        if(!localStorage.getItem('idToken')){
            this.router.navigate(["/login"])
            return
        }


        // this.cartService.getOrder().subscribe((orders)=>{
        //    this.orderPal = orders.find((order)=> {return order.customerId === localStorage.getItem('userId')});
        //     // console.log(this.orderPal.$key);
        // }) 



        //Deleting Temporary order after a successful transaction
        this.cartService.getOrderItems().subscribe((items)=>{
            this.itemKeys = items.filter((item)=>{
                return item.customerId == localStorage.getItem("userId");
            });
        
        });
        this.cartService.getOrder().subscribe((orders)=>{
             this.orderKeys = orders.find((order)=>{
                return order.customerId == localStorage.getItem("userId");
            });
        });
     }

}