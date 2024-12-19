/*
 * Programming Quiz: Colors of the Rainbow (6-4)
 *
 * Use only the splice() method to modify the rainbow variable:
 *  - remove "Blackberry"
 *  - add "Yellow" and "Green"
 *  - add "Purple"
 */

// your code goes here
var rainbow = ['Red', 'Orange', 'Blackberry', 'Blue']; // incorrect rainbow
rainbow.splice(2,1); // removed blackberry
rainbow.splice(2, 0 ,'Yellow' , 'Green'); // inserted Y and G
rainbow.push('Purple'); // Added purple to end 
console.log(rainbow); // printed corrected result of "Red", "Orange", "Yellow", "Green", "Blue", "Purple"
