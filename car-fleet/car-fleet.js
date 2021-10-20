/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = module.exports = function(target, position, speed) {
    let map = [];
	let Result = 0;
    
	for(let i = 0; i < position.length; i++)
		{
			map[target - position[i]] = (target - position[i]) / speed[i];           
		}
    
	let Max = 0       
    
	for (let i of map) {            
            
		if(i > Max) {
			Result++;
			Max = i;				
		}
            
	}
		
		return Result;
};