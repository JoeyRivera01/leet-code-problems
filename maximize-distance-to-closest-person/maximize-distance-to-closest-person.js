/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
  const zeros = seats.join('').split('1');
  return Math.max(
    zeros.shift().length,
    zeros.pop().length,
    ...zeros.map(i => i.length > 0 ? Math.floor((i.length + 1) / 2) : 0)
  );
};