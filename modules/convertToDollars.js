//function to convert an integer to a dollar value
function dollarConversion(ranNum) {
  // return '$' + ranNum.toLocaleString();
  return '$' + ranNum.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}// end dollarConversion

module.exports = dollarConversion;
