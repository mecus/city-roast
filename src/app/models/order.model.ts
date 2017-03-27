export interface iOrder {
    id: string;
    orderId: string;
    customerName: string;
    email: string;
    telephone: string;
    address: string;
    postcode: string;
    city: string;
    country: string;
    amount: string;
    orDate: Date;
}

export class CustomerOrder {
    id: string;
    orderId: string;
    customerName: string;
    email: string;
    telephone: string;
    address: string;
    postcode: string;
    city: string;
    country: string;
    amount: string;
    orDate: Date;

    constructor(){
    this.id = "";
    this.orderId = " 12345";
    this.customerName= " ";
    this.email = "";
    this.telephone = "";
    this.address = "";
    this.postcode = "";
    this.city = "";
    this.country = "";
    this.amount = "";
    this.orDate = new Date();
    }
}