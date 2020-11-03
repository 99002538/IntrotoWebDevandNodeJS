var http=require('http');

http.createServer(function(req,res){

res.write("have a  great day");

console.log('request url '+req.url);

res.end();

console.log('this will be printed last');

}).listen('3000');

console.log('this will be printed first');

console.log('server running in port 3000');