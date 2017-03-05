
export interface iCustomer {
    firstName: string;
    lastName: string;
    email: string;
    telephone: string;
    addressOne: string;
    addressTwo: string;
    postCode: string;
    city: string;
    country: string;

    deliveryOne: string;
    deliveryTwo: string;
    deliveryCode: string;
    deliveryCity: string;
    deliveryCountry: string;
    deliveryTrue: string;
}

export class Customer {
    firstName: string;
    lastName: string;
    email: string;
    telephone: string;
    addressOne: string;
    addressTwo: string;
    postCode: string;
    city: string;
    country: string;

    deliveryOne: string;
    deliveryTwo: string;
    deliveryCode: string;
    deliveryCity: string;
    deliveryCountry: string;
    deliveryTrue: string;

    constructor(){
        this.firstName = "Jon";
        this.lastName = "Doe";
        this.email = "";
        this.telephone = "";
        this.addressOne = "";
        this.addressTwo = "";
        this.postCode = "";
        this.city = "";
        this.country = "Unite Kingdom";

        this.deliveryOne = "";
        this.deliveryTwo = "";
        this.deliveryCode = "";
        this.deliveryCity = "";
        this.deliveryCountry = "Unite Kingdom";
        this.deliveryTrue = "";
    }
}