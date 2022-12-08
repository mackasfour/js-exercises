const add = function(x,y) {
  return x + y;
};

const subtract = function(x,y) {
	return x - y;
};

const sum = function(array) {
	return array.reduce((a, b) => a + b, 0);
};

const multiply = function(array) {
  return array.reduce((a, b) => a * b);
};

const power = function(a,b) {
	return Math.pow(a, b);
};

const factorial = function(a) {

  let factorialNum = a;

	if(a === 0 || a === 1) {
    return 1;
  } 

  while(a > 1) {
    a--;
    factorialNum = factorialNum * a;
  }

  return factorialNum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};