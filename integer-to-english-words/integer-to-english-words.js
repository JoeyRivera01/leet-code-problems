/**
 * @param {number} num
 * @return {string}
 */

const LESS_THAN_20 = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
const TENS = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
const THOUSANDS = ["", "Thousand", "Million", "Billion"];

const numberToWords = function(num) {
    if(num === 0) {
        return 'Zero';
    }
    let thousandCounter = 0;
    let result = '';
    
    while(num > 0) {
        if(num % 1000 != 0) {
            result = numToString(num % 1000) + THOUSANDS[thousandCounter] + ' ' + result;
        }
        num /= 1000;
        num = Math.trunc(num);
        thousandCounter++;
    }
    return result.trim();
};

const numToString = function(num) {
    if (num === 0)
        return '';
    else if (num < 20)
        return LESS_THAN_20[num] + " ";
    else if (num < 100)
        return TENS[Math.trunc(num / 10)] + " " + numToString(num % 10);
    else
        return LESS_THAN_20[Math.trunc(num / 100)] + " Hundred " + numToString(num % 100);
}
