/*var express=require('express');

var app=express();

app.get('/',function(req,res){

res.send('welcone to express');


});

app.listen('3000',function(){

console.log('server running in port 3000');

})

app.get("/loginUser",function(req,res){

    var uname=req.query.username;

    var ucity=req.query.city;

    var newuser={

        username:uname,city:ucity
    
    }

        res.send(newuser);

});

app.get("/search/:choice",function(req,res){

var cab=req.params.choice;

res.send("your cab choice is " + cab)

})

app.get("/searchCab/:choice/:type",function(req,res){

    var cab=req.params.choice;

    var cabType=req.params.type;

res.send("your car choice is "+cab+' with '+cabType);

})

app.get("/searchCabs/:choice/:type",function(req,res){

    var cab=req.params;

  res.send(cab);

})

var bookList=require('./json.json');

app.get("/showBooks",function(req,res){

    res.status(200).send(bookList);
})
*/

var express=require('express');

var app=express();

var bookList=require('./json.json');

var cors = function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
}
app.use(cors);

app.get("/showAll",function(req,res){

res.status(200).send(bookList);

})
app.get("/showByAuthor",function(req,res){

    var author=req.query.author;

    var newBookList=[];

    bookList.forEach(book=>{
if(book.author==author)
        newBookList.push(book);

    });
    res.status(200).send(newBookList);
})

app.get("/showByCategory",function(req,res){

    var category=req.query.category;

var newBookList=[];

bookList.forEach(book=>{
if(book.category==category)
    newBookList.push(book);

});
     res.status(200).send(newBookList);
})

app.listen('3000',function(){

    console.log('server 3000');
})
