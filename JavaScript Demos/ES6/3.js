function showFinalCost(totalItem){

    return function calculatePrice(cost){

        price=cost*totalItem;

        if(totalItem>100){

            price=0.9*cost*totalItem;

        
        }

        return price;
    }

 
}

var x=showFinalCost(10);

console.log(x(50));

var fun=(a,b=10)=>console.log(a+b);

fun();

fun(500);

fun