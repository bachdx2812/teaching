/* 
  function as an argument
*/ 

// function callAMan(name) {
//   return `Mr ${name.toUpperCase()}`;
// }

// function giveThisManAShield(name) {
//   console.log(`Give ${name} a fucking shield`);
// }

// giveThisManAShield(callAMan("bach"));

/* 
  Default parameter's value
*/ 

function getRealPrice(price, taxRate = 0.1, shippingFee) {
  return price + price * taxRate + shippingFee;
}
// getRealPrice(1000, undefined, 20);

function getRealPrice1(price, taxRate = 0.1, shippingFee = 30) {
  return price + price * taxRate + shippingFee;
}