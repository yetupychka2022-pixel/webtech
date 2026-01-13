
function findMax(a, b) {
  return a > b ? a : b;
}
console.log(findMax(5, 10)); 
const subtract = function(a, b) {
  return a - b;
};

console.log(subtract(10, 3)); 
const sqrt = (n) => Math.sqrt(n);
console.log(sqrt(16)); 

function geometricProgression(n, a, r) {
  if (n === 1) {
    return a;
  }
  return a * Math.pow(r, n - 1) + geometricProgression(n - 1, a, r);
}

console.log(geometricProgression(3, 2, 2)); 
function createDivider(divisor) {
  return function(number) {
    return number / divisor;
  };
}

const divideBy2 = createDivider(2);
console.log(divideBy2(10)); 


function applyOperation(a, b, func) {
  return func(a, b);
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}


console.log(applyOperation(3, 4, add));      
console.log(applyOperation(3, 4, multiply)); 

function processSet(set, callback) {
  const result = new Set();
  for (let item of set) {
    result.add(callback(item));
  }
  return result;
}

const numbersSet = new Set([1, 2, 3, 4]);
const squaredSet = processSet(numbersSet, x => x * x);

console.log(squaredSet); 
