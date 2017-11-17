export interface iProduct {
    id: number;
    code: string;
    name: string;
    oldprice: string;
    price: string;
    blend: string;
    size: string;
    roast: string;
    imageUrl: string;
    category: category;
    description: string;

}
export interface category{
    name: string;
    group:string;
}
export class Product {
    id: number;
    code: string;
    name: string;
    oldprice: string;
    price: string;
    blend: string;
    size: string;
    roast: string;
    imageUrl: string;
    category: category;
    description: string;

}
