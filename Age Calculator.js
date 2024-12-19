
// will try to simplify and re-move unessecary recursives bracets ect.. and nested fucntion calls still need to read more about and play with to understan


let name = 'Ray'; // participants name 
let dob = 1988; // date of birth 
let year = 2023; // current year 

const ageCalculator = function (age) { // age to calculate how old they are in years 
  age = year -  dob; // argument ?
  return ageCalculator = 'name' + age + ' years old.'; // calculation printed, was red when in brackets changed to = now fine, not sure why, read up on again.
};
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));// Needed a chat bot to explain what the heck was going on with this assertion error, I feel so silly not realizing I could click on it, and then not realizing I could search the error link itself to understand waht was happening, sigh.

//simplified version of the code //
const ageCalculator = function (name, dob, year) {
  const age = year - dob;
  return `${name} is ${age} years old.`; // needed to put name and age parameters for the argument as with ${} as suggested by VS, still don't quite understand why after I tried moving the varabiales and atatments around. 
};

// Example usage
console.log(ageCalculator("Suzie", 1984, 2016));
