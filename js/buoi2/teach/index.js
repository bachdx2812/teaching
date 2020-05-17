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

// function getRealPrice(price, taxRate = 0.1, shippingFee) {
//   return price + price * taxRate + shippingFee;
// }
// getRealPrice(1000, undefined, 20);

// function getRealPrice1(price, taxRate = 0.1, shippingFee = 30) {
//   return price + price * taxRate + shippingFee;
// }

// const name = "Bach";

// 1. Khai bao truyen thong
function sayHi(name) {
  name = `${name} dep trai`;
  console.log(`Say hi to Mr/Mrs ${name.toUpperCase()}`);
}

// 2. Anonymous function
// function (name) {
//   console.log(name);
// }
// (name) => { console.log(name) }

// 3. As a variable
const hiBeautiful = function (name) {
  console.log(`Say hi to Mr/Mrs ${name.toUpperCase()}`);
};

// 4.Arrow function

// function getRealPrice(price, taxRate = 0.1, shippingFee) {
//   const tax = price * taxRate;
//   const result = price + tax + shippingFee;
//   return result;
//   return price + price * taxRate + shippingFee;
// }

// => FAT arrow
const getRealPrice = (price, taxRate = 0.1, shippingFee) =>
  price + price * taxRate + shippingFee;

const makeWine = (name) => ({ name: name, age: 0 });

// IIFE (Immediate Invoke Function Expression)
// run, execute, invoke
// makeWine();

(function () {
  alert("asedqweqwe");
})();
// Event listeners

// exercises

// 1. write a function to convert `minutes` to `seconds`
// convertMinutesToSeconds(m)
// convertMinutesToSeconds(1) => 60
// convertMinutesToSeconds(5) => 300


// 2. write a function to return the next number from the interger passed
// nextNumber(10) => 11
// nextNumber(12) => 13

// 3. write a function to count number of characters in passed string
// countChar("bach") -> 4
// countChar("bach dep trai") -> 11