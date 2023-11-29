// Start coding here

let calculator = {
  add: (a, b) => {
    return a + b;
  },

  subtract: (a, b) => {
    return a - b;
  },
  multiply: (a, b) => {
    return a * b;
  },
  divide: (a, b) => {
    return a / b;
  },
};

const addResult = calculator.add;
console.log(addResult(10, 20));

const divideResult = calculator.divide;
console.log(divideResult(3000, 10));
