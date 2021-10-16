/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    function gcd (a,b){
        if (!b) return a;
        return gcd(b, a%b)
    }
    const map = new Map();

    for (const c of deck){
        map.set(c, (map.get(c)||0)+1)
    };

    const values = [...map.values()];

    return values.reduce(gcd)>1
};