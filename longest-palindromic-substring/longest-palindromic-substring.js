/**
 * @param {string} s
 * @return {string}
 */

const longestPalindrome = function(s) {
  let longest = '';
  const findLongestPalindrome = (str, i, j) => {
    while (i >= 0 && j < str.length && str[i] === str[j]) {
      i -= 1;
      j += 1;
    }
    return str.slice(i + 1, j);
  }
  for (let i = 0; i < s.length; i++) {
    const curr1 = findLongestPalindrome(s, i, i);
    const curr2 = findLongestPalindrome(s, i, i + 1);
    const longerPal = curr1.length > curr2.length ? curr1 : curr2;
    if (longerPal.length > longest.length) {
      longest = longerPal;
    }
  }
  return longest;
};

// var longestPalindrome = function(s) {
//     let longest = '';
//     const findLongestPalindrome = (str, i, j) => {
//         while(i >= 0 && j < str.length && str[i] === str[j]) {
//             i -= 1;
//             j += 1;
//         }
//         // slice the qualified substring from the second last iteration
//         return str.slice(i + 1, j);
//     }
//     for (let i = 0; i < s.length; i++) {
//         // palindrome can center around 1 or 2 letters
//         const current1 = findLongestPalindrome(s, i, i);
//         const current2 = findLongestPalindrome(s, i, i + 1);
//         const longerPalindrome = 
//               current1.length > current2.length ? current1 : current2;
//         if (longerPalindrome.length > longest.length) {
//             longest = longerPalindrome;
//         } 
//     }
//     return longest;
// };