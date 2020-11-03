arr=[1,2,3];

var[a,b,c]=arr;

console.log(a);

var a,b=arr;

console.log('s',b);

var[a,,c]=arr;

console.log(c);

const{username,city}={username:'Raju',city:'Bengaluru'}

console.log(username,city);

const{username:myname,city:mycity}={username:'Raju',city:'Mumbai'}

console.log(myname,mycity);

var student={

name:'Raju',city:'chenn',hobby:['sports','music']

}

var details=(s)=>{console.log(s.hobby)}

details(student);var ndetails=({name,city,hobby})=>{console.log(hobby)}

ndetails(student);

var firstName='Kumaran';

let greeting='Hi $(firstName)';

console.log(greeting);

