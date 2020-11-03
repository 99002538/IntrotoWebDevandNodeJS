"use strict";
exports.__esModule = true;
exports.Product = exports.greet = exports.greeting = void 0;
exports.greeting = 'llo';
function greet() {
    console.log('exported');
    ownMsg();
}
exports.greet = greet;
function ownMsg() {
    console.log('not exported');
}
var Product = /** @class */ (function () {
    function Product(itemName, price) {
        this.itemName = itemName;
        this.price = price;
        this.getinfo = function () {
            console.log('${this.itemName} is of price ${this.price}');
        };
    }
    return Product;
}());
exports.Product = Product;
