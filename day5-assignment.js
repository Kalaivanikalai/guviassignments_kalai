// c. Sum of all numbers in an array
const sum = function() {
  return function sum(x, y, z) {
    const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
  };
}();
console.log(sum(1, 2, 3));

//  d. Return all the prime numbers in an array
const newArray = [1, 3, 2, 5, 10];
const myPrimeArray = newArray.filter(num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) 
    return false;
  }
  return num !== 1;
});
console.log(myPrimeArray);

// g. Remove duplicates from an array
let names = ["kalai","vani","kalai","virat","vani"];

let resultval = names.filter((c, index) => {
    return names.indexOf(c) === index;
});
console.log(resultval);


// c. Sum of all numbers in an array
const sumofNumber = (number1, number2) => {
  return(number1+number2)
}
  result= sumofNumber(30,30)
  console.log(result);
  


//  d. Return all the prime numbers in an array
var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});
console.log(numArray);



