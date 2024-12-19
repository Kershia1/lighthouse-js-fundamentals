const numberOfVowels = function(string) {
let counter =0; // position to start at in the string
for (let i=0; i<string.length; i++) { // going across string from 0
  if (string[i]  === 'a'|| string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u') { // over looked making sure each string was noted as string[i] in my arg
    counter ++; //incrementing up to count the vowles after working across the string 
  }
}
return counter;
};

console.log(numberOfVowels("orange")); //3
console.log(numberOfVowels("lighthouse labs")); //5
console.log(numberOfVowels("aeiou")); //5
