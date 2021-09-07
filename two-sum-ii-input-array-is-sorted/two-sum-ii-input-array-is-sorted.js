/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  if (!numbers.length) return [];
  let x = 0, y = numbers.length - 1;
  while (x < y) {
    console.log('x', x, 'y', y);
    if (numbers[x] + numbers[y] === target) {
      return [x + 1, y + 1];
    } else if (numbers[x] + numbers[y] < target) {
      x++;
    } else {
      y--;
    }
  }
};