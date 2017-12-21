class Item {

    constructor(name, amount = 0) {
        this.name = name;
        this.amount = amount;
    }

    toString() {
        return JSON.stringify(this);
    }

}

class Product extends Item {

    constructor(name, amount, brand) {
        super(name, amount);
        this.brand = brand;
    }

    hasStock() {
        return this.amount > 0;
    }
}

let car = new Product("A3", 1, "Audi");
console.log(car);

let brands = ["Audi", "BWM", "Seat"];
for (let brand of brands) {
    console.log("Brand" + brand);
}