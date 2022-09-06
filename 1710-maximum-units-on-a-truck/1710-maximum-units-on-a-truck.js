/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    let maxUnits = 0;
    let boxesUsed = 0;

    boxTypes.sort((a, b) => b[1] - a[1]);
    console.log(boxTypes)
    
    for (let i = 0; i < boxTypes.length; i++) {
        if (truckSize - boxTypes[i][0] >= 0) {
            truckSize -= boxTypes[i][0];
            maxUnits += (boxTypes[i][0] * boxTypes[i][1]);
        } else {
            maxUnits += (truckSize * boxTypes[i][1]);
            break;
        }
    }
    
    return maxUnits;
};