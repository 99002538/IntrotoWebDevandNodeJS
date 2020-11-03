var Person=require('./persondetails');

var person=new Person('Ram','Bangalore');

person.printDetails();

person.greetMessage('Have a good day');

console.log(person.mobile);