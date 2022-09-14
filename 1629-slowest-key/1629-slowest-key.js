/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
let keyTimeMap = new Map()
    let longestDurationKeys = []
    //Inital keyTimeMap set
    keyTimeMap.set(keysPressed[0], releaseTimes[0])

    //Populating keyTimeMap
    for (let i = 1; i < releaseTimes.length; i++) {
        let currentKey = keysPressed[i]
        let duration = releaseTimes[i] - releaseTimes[i - 1];

        if (!keyTimeMap.has(currentKey)) {
            keyTimeMap.set(currentKey, duration)
        } else {
            if (duration > keyTimeMap.get(currentKey)) {
                keyTimeMap.set(currentKey, duration)
            }
        }
    }
	//Finding the max value in keyTimeMap
    let longestDuration = Math.max(...keyTimeMap.values())
	
    //Traversing keyTimeMap to find all keys with the longest press duration
    for (let [key, time] of keyTimeMap) {
        if (time === longestDuration) longestDurationKeys.push(key)
    }

    return longestDurationKeys.length === 1 ? longestDurationKeys[0] : longestDurationKeys.sort().pop()

};