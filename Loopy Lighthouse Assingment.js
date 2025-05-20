// let num = 100;

// for (num = 100; num <= 200; num++) {
//   if (num % 3 === 0 && num % 4 === 0) {
//     console.log("LoopyLighthouse");
//   } else if ( num % 3 === 0) {
//     console.log("Loopy");
//   } else if (num % 4 === 0) {
//     console.log("Lighthouse");
//   } else {
//     console.log(num);
//   }
// }
 /* refactor goal: 

 1) Nix the if -else chain

 2) Sleek with a terniary operator ? :
  i.e. condition ? valueIfTrue : valueIfFalse

 3) Solve for the divisable numbers 3&4 = "LoopyLighthouse", 3 = "Loopy", 4 = "Lighthouse"

 4) Must still print each iteration to console
 
 */
const num = 100;

for (num = 100; num <= 200; num++) {
  let results= 
   num % 3 === 0 && num % 4 === 0 ? "LoopyLighthouse":
   num % 3 === 0 ? "Loopy":
   num % 4 === 0 ? "Lighthouse":
   num;
  
  console.log(results);
}

