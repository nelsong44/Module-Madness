//function to convert an integer to a dollar value
function dollarConversion(min, max) {
  // return '$' + ranNum.toLocaleString();
  return Math.floor(Math.random() * (1 + max - min) + min);
}// end dollarConversion

module.exports = dollarConversion;
