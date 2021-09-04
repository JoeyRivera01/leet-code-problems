/**
 * @param {string} s
 * @return {number}
 */
const map = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };

const romanToInt = function(s) {
  let sum = 0;
  let i = 0;
  let nextValue = 0;
  while (i < s.length) {
    let currentSymbol = s.charAt(i);
    let currentValue = map[currentSymbol];
    if (i + 1 < s.length) {
      let nextSymbol = s.charAt(i + 1);
      nextValue = map[nextSymbol];
    } else {
      nextValue = 0;
    }
    
    if (currentValue < nextValue) {
      sum += (nextValue - currentValue);
      i += 2;
    } else {
      sum += currentValue;
      i += 1;
    }
  }
  return sum;
}


romanToInt("MDCXCV");