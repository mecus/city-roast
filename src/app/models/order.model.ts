export interface iOrder {
    // customerId: string;
    // orderId: string;
    // customerName: string;
    // email: string;
    // telephone: string;
    // address: string;
    // postcode: string;
    // city: string;
    // country: string;
    // amount: string;
    // orDate: Date;

    name: string;
    email: string;
    telephone: string;
    address: string;
    postcode: string;
    city: string;
    country: string;
    amount: string;
    orderid: string;
    status: string;
    itemsid: string;
}

export class CustomerOrder {
    customerId: string;
    orderId: string;
    customerName: string;
    email: string;
    telephone: string;
    address: string;
    postcode: string;
    city: string;
    country: string;
    amount: string;

    constructor(){
    this.customerId = "";
    this.orderId = "LCREF"+Math.floor((Math.random() * 1000) + 100);
    this.customerName= " ";
    this.email = "";
    this.telephone = "";
    this.address = "";
    this.postcode = "";
    this.city = "";
    this.country = "";
    this.amount = ""
    }
}