//require other two modules to make them accessible to this module
var generateNumber = require('./randomNumber.js');
console.log(generateNumber);
var dollarConversion = require('./convertToDollars.js');
console.log(dollarConversion);
//function to call generateNumber and pass its ouput (a random number) into dollarConversion to convert it to a dollar value
function finalForm(generateNumber) {
  return dollarConversion(generateNumber);
}// end finalForm
//function to display the dollar value as the account balance
function addText (finalForm){
  return 'Account balance: \n' + finalForm;
}// end addText

module.exports = {
  finalForm: finalForm,
  addText: addText
};
