/* Build upon previous loopyLighthouse function to take in  
Range: array of two rangebers representing the start and end values for the loop
Multiples: array of two rangebers representing the multiples you want to replace with words
Words: array of two strings representing the words that will replace the multiples

Example Input:
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

Desired Output:
loopyLighthouse function log to the console all the rangebers from 15 to 90, except replacing multiples of 2 with "Batty", multiples of 5 with "Beacon", and multiples of 2 and 5 with "BattyBeacon"

*/

function loopyLighthouse(range, multiples, words) {

  for (range = 15; range <= 90; range++) {
    let results =
      range % 3 === 0 && range % 4 === 0 ? "LoopyLighthouse" :
        range % 3 === 0 ? "Loopy" :
          range % 4 === 0 ? "Lighthouse" :
            range;

    console.log(results);
  }
}



// function loopyLighthouse() { // function expression  if I do ([]) empty destructuring error recieved
// let x = ["Sambro"];
// let y = [];
// let z = [];
// for(let x = 0;  x <= 88; x ++) { // outer loop to initialize test-condition 
//   }
//   if ( x === % 3); // 1st statement  
//   console.log(x);
//   }
//     for ( let y = 0; y <= 88; y ++) // 2ed statement 
//     if (y === % 3);
//     console.log(y); {
//       for (let z = 0; z <=88; z ++) // 3ed statement 
//       if (z === % 7);
//     } 



//console.log loopyLighthouse([0,88],[3,7], ["Sambro", "Pharos", "SambroPharos"]);


/*if ( range % 3 ===  0 && range % 7 === 0)
return "SambroPharos";
} else if { (range % 3 === 0) 
return "Sambro";
}else{ (range % 7 === 0) 
return "Pharos"; 
}
console.log(loopyLighthouse(range));
}
let x = 0;
let z = 0;
labelCancelLoops: while (true) {
console.log("Outer loops:", x);
x += 1;
z = 1;
while (true) {
 console.log("Inner loops:", z);
 z += 1;
 if (z === 10 && x === 10) {
   break labelCancelLoops;
 } else if (z === 10) {
   break;
 }
}
}

*/
