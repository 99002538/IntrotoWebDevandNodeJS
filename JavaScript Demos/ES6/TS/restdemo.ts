/*unction addNumbrs(...nums:number[]){


    var sum=0;

    for(var i=0;i<nums.length;i++){

        sum+=nums[i];

    }

    console.log(sum);
}

addNumbrs();

addNumbrs(10,20,30);

addNumbrs(10,20,30,40);

function usrDetails(nam:string,cty:string='Bangalore'){

    console.log('name '+name);

    console.log('city '+city);


}

usrDetails('Raju');

usrDetails('Raju','Ooty');

var gret=function(msg:string){

    return msg;
}

console.log(gret('have a great day'));

gret=(msg:string)=>{

    return 'welcome '+msg;
}

console.log(gret('hello')); */

/*var checkType=(a,b)=>{

    console.log(a+b);
}

checkType(10,20);

checkType(10,'Ram');

checkType('Ram','Tom');*/

var myarr = [1,2,3,4,5,6]; 
var new_arr = [...myarr,7,8,9]; 
for(var i of new_arr){ console.log(i); }
 var student ={name:'Kumaran',age:20}; 
 var dtails ={mobile:987890,city:'Bangalore',state:'KAR'}; 
 var newstudent={...student,...dtails}; 
 var newemployee={...student,...dtails,salary:1000}; console.log(newemployee); for(var j in newstudent){ console.log(j,newstudent[j]); }

