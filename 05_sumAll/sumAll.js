const sumAll = function(begin, end) {
	let sum = 0;
	let arr = [];

	if(begin===end){
		return begin;
	}

	if((begin<0)||(Number.isInteger(begin)!=true)||typeof(begin)!='number'){
		return "ERROR";
	}

if((end<0)||(Number.isInteger(end)!=true)||typeof(end)!='number'){
		return "ERROR";
}


	if(begin<end){
	for(let i = begin; i<=end; i++){
		arr.push(i);
	}
	// console.log(arr);

	for(let i=0;i<arr.length;i++){
		sum+=arr[i];
	}
	return sum;
};


if(begin>end){
	for(let i = end; i<=begin; i++){
		arr.push(i);
	}
	// console.log(arr);

	for(let i=0;i<arr.length;i++){
		sum+=arr[i];
	}
	return sum;
};
}















console.log(sumAll(5,5))


// Do not edit below this line
module.exports = sumAll;
