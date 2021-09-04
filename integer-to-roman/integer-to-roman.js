/**
 * @param {number} num
 * @return {string}
 */

const VALUES = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];    
const SYMBOLS = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  
var intToRoman = function(num) {
 
  let romanNumeral = '';
  for (let i = 0; i < VALUES.length && num > 0; i++) {
    while (VALUES[i] <= num) {
      num -= VALUES[i];
      romanNumeral = romanNumeral.concat(SYMBOLS[i]);
    }
  }
  return romanNumeral;
};
