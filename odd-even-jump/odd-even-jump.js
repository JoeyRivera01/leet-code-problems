/**
 * @param {number[]} arr
 * @return {number}
 */
var oddEvenJumps = function(inputArray) {
	const length = inputArray.length;
	//create a series of empty arrays with the length of our input Array
	const nextHigher = new Array(length).fill(0);
	const nextLower = new Array(length).fill(0);
	const higher = new Array(length).fill(0);
	const lower = new Array(length).fill(0);

	let stack = [];
	

	const largerJumps = inputArray
		//create 2d array [[number, original index]]
		.map((val, i) => [val, i])
		//sort by number
		.sort((a,b) => (a[0] === b[0])? a[1] - b[1]: a[0] - b[0]);


	const smallerJumps = inputArray
		//create same 2d array but this time multiply the number by -1
		//had to do this crap because of a sorting bug in node 10.5.0 this doesnt exist on the lates lts version
		.map((val, i) =>[-val, i])
		//sort by number in reverse order this time (using the negative number above)
		.sort((a,b) => (a[0] === b[0])? a[1] - b[1]: a[0] - b[0]);

	//finding valid odd jumps
	for(let position of largerJumps){
		const ind = position[1];
		while(stack.length && stack[stack.length -1]< ind){
			nextHigher[stack.pop()] = ind;
		}
		stack.push(ind);
	}
	stack = [];
	//finding valid even jumps
	for(let position of smallerJumps){
		const ind = position[1];
		while(stack.length && stack[stack.length -1]< ind){
			nextLower[stack.pop()] = ind;
		}
		stack.push(ind);
	}
	//setting the final solution (last number is always a valid path)
	higher[length -1] = 1;
	lower[length -1] = 1;
	
	//logic to combining odd and even jumps
	for(let i =length-2; i>=0; i--){
		higher[i] = lower[nextHigher[i]]
		lower[i] = higher[nextLower[i]]
	}
	
	//finding total number of paths 
	return getSum(higher)

	function getSum(a){
		let sum = 0;
		for(let number of a){
			sum += number;
		}
		return sum;
	}
};