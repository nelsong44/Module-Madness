//require other two modules to make them accessible to this module
var generateNumber = require('./randomNumber.js');
var dollarConversion = require('./convertToDollars.js');

//function to call generateNumber and pass its ouput (a random number)
//into dollarConversion() to convert it to a dollar value
function finalForm(generateNumber) {
  return dollarConversion(generateNumber);
}// end finalForm

//function to format the display of the account balance
function addText (finalForm){
  return 'Account balance: ' + finalForm;
}// end addText

module.exports = {
  finalForm: finalForm,
  addText: addText
};
