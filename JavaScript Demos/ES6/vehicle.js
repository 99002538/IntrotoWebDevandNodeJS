class Vehicle{

    constructor(brand,price){

        this.brand=brand;
        this.price=price;
    }

    set details(discount){

       this.brand=this.brand.toUpperCase();

        this.price=this.price-discount;
    }

    get details(){

        return this.brand+" "+this.price;
    }
}


vehic=new Vehicle('cheap car',9000);

vehic.details=200;

console.log(vehic.details);