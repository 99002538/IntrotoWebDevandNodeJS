var printval=(val:string|number)=>{

if(typeof(val)=='string'){

console.log('welcome '+val);


}

if(typeof(val)=='number'){

console.log('your score is '+val);

}

}

printval('Kumaran');

printval(10);

let printvalues=(val:string[]|number|Object)=>{

if(Array.isArray(val)){

    console.log('print Array '+val);
}

if(typeof(val)=='object'){

    console.log(val);


}


}

printvalues(['Raj','Ram']);

printvalues({name:'kumu'}); 