

export class CustomerOrder {
    orderId: string;
    customerName: string;
    email: string;
    address: string;
    shipping: string;
    products: Object;

    constructor(){
    this.orderId = " 12345";
    this.customerName= " ";
    this.email = "";
    this.address = "";
    this.shipping = "";
    this.products = { };
    }
}