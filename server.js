
//require node http library
var http = require('http');
//require moduleThree to make it accessible
var finalForm = require('./modules/moduleThree.js');
//create server
var server = http.createServer(function(request, response) {

var min = 100;
var max = 1000000;
console.log(finalForm.finalForm(min, max)); //logs in Terminal
console.log(finalForm.addText(min, max));
response.writeHead(200); //success
response.write('Your request has been received successfully.'); //logs in browser
// response.write(finalForm.finalForm()); //send the result back to the client as an official response
// response.write(addText.addText());
response.end();
});

//connect server to port
server.listen(8000);
console.log('listening on port 8000');
