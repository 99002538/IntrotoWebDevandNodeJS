var sumofnums=function(...arguments){


var sum=0;

for(let i=0;i<arguments.length;i++){

sum+=arguments[i];

}
console.log(sum);

}
/*sumofnums(10,20);
sumofnums(10,20,30);*/


fun=function(a,b,...args){

    console.log("a",a);

    console.log("b",b);

    console.log(args);
}

    fun(1,2,"hello",900);

    fun(1);

    fun(1,2);


