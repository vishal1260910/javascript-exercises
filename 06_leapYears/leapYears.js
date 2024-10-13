const leapYears = function(year) {
	if ((year %4===0)&&(year%100!=0)||(year%400===0)){
		return true;
	}

		return false;


};
console.log(leapYears(1900));

// Do not edit below this line
module.exports = leapYears;

// A year is a leap year if:

// It is divisible by 4 and:
// It is not divisible by 100, or
// It is divisible by 400.
