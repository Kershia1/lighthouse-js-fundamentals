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
   const string = input.split(' '); //look for an empty space, seperate each word in string
  return string.map((word, index) => {
      ? (index === 0) :
return word[0].toUpperCase() + word.slice(1) + word.join;
    })
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
