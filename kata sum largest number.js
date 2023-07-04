const sumLargestNumbers = function(data) {
  let largestArray = 0; // find and keep the largest number 
  let sum = 0; //add the  value of number together per given array 
  for (let data i = 0; i < data.length; i++) { // i completely forgot the let and to [] use to initalize my start point, no wonder I was confused reviewed and used [i] for my let  // wasn't paying attention to my equality opperatore shouldn't have used an absolute ===
    if (largestArray == data[i]) { //checks to see which is the largest number, then swtiches to largest 
      largestArray = data[i]; // need to review why this is done again instead of just doing a return statment here. I keep confusing myself.// after review semi-colon causes me to automatically exit loop instead of being an if statement.
    }
    sum += data[i]; // puts togehter  this is where the for.. of loop is essential 
  }
  return sum; // final largest amount 
}; // literally kept trying {} in dif spots till it worked gahh tired!
console.log(sumLargestNumbers([1, 10])); // 11 
console.log(sumLargestNumbers([1, 2, 3])); // 6
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); // 148
// need to be able to work through an array of numbers and return the highest values 
