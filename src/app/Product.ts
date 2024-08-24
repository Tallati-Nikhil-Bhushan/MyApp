//create a class with name Product with attributes in typescript
export class Product {
    productId!:string;
    brand!:string;
    price!:number;
    qty!:number;
    description!:{
        age:number;
        season:string
    }
    suppliers!: Array<any>
    // constructor(productId:string,brand:string,price:number,description:string,qty:number) {
    //     this.productId = productId;
    //     this.brand = brand;
    //     this.price = price;
    //     this.description = description;
    //     this.qty = qty
    // }
}

