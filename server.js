
//requires
var http = require('http');
var finalForm = require('./moduleThree.js');
//create server
var server = http.createServer(function(request, response) {

console.log(finalForm.finalForm()); //logs in Terminal
response.writeHead(200); //success
response.write('Your request has been received successfully.'); //logs in browser
response.end();
});
//connect to port
server.listen(8000);
console.log('listening on port 8000');
