//function to generate a random number to be passed to convertToDollars
var min = 100;
var max = 1000000;
function generateNumber(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}//end generateNumber

module.exports = generateNumber;
