const add = function(num1, num2) {
    return num1 + num2 
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(arr) {
    var sum = 0
    for (i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
};

const multiply = function(arr) {
    var product = arr[0];
    for (i = 1; i < arr.length; i++){
        product *= arr[i]
    }
    return product
};

const power = function(num, power) {
	return num ** power
};

const factorial = function(num) {
    if(num == 0){
        return 1
    }
    var i = num-1 , product = num
	while (i != 1) {
        product *= i
        i--
    }
    
    return product
};
console.log(factorial(10))
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};