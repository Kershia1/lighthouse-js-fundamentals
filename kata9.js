/**
 * Convert a string to camel case 
 * 
 * Desired Output: 
 * 
 * thisIsAString
loopyLighthouse
supercalifragalisticexpialidocious

-I could use regex, or do extra with clear to read code?
-deconstruct an use filter and join
-split and join
-reread docs on charAt()


 */

const camelCase = function (input) {
  return input
  .toLowerCase()
  .split(' ')

};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));



//this is throwing undefined
  //.map((word, index) => {
   // index === 0 ? word : word[0].toUpperCase() + word.slice(1)
  //  })