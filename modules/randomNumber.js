//function to generate a random number to be passed to convertToDollars
function generateNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}//end generateNumber

module.exports = generateNumber;
