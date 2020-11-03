class Person{

    constructor(name,city){
        this.city=city;
        this.name=name;

    }

    get firstname(){

        return this.name.toUpperCase();

    }

    set firstname(name){

        this.name=name;
    }
}

var person=new Person('Raju');

console.log(person.firstname);

person.firstname='Marley';

console.log(person.firstname);

// class Person {
//     constructor(name, city) {
//         this.city = city;
//         this.name = name;
//     }
//     getName() {
//         return this.name;
//     }
//     setName(name) {
//         this.name = name;
//     }
// }
// var person = new Person();
// person.setName('Marley');
// console.log(person.getName())