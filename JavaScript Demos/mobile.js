var mobile=[

{
    name:'a',
    something:'b',
    arrayy:['sfsef','sefsef']

},

{
    name:'ba',
    something:'bc',
    arrayy:['ddd','dd']

}


]

mobile.forEach(mobil=>{

for(const mob in mobil){

    var mo=mobil[mob];

    if(mo instanceof Array){

for( const i in mo){

console.log('this:'+mo[i]);

}
    }

    else{

        console.log(mob);
    }

    }



});

