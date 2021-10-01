/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = time => {
    let c = new Array(60).fill(0)
    return time.reduce((acc, cur) => {
        acc += c[(60 - cur % 60) % 60]
        c[cur % 60] += 1 
        return acc
    }, 0)
}