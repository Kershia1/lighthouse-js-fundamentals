console.log("3 is odd: " + isOdd(3)); // paste into terminal at end to test 
console.log("8 is odd: " + isOdd(8)); // paste into terminal at end to test 

const isOdd  = function (num) {
  return num % 1 === 0;
}

console.log(isOdd(3));
console.log(isOdd(8));
