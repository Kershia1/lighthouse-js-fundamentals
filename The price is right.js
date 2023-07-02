/*
 * Programming Quiz: The Price is Right (6-3)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `prices`
 * - The variable `prices` should be an array having different values for the 1st, 3rd, and 7th elements (note not the indexed value, need to go through the array fro, the start with a for statement, proceed along the length of the array by one)
 * after seeting these parameter, you need a new if /else block to change the value of each element, by its indexed number. 
 * - Your code should print `prices` to the console as an array. Do not iterate over the elements. 
 */
 
var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

// your code goes here
for(var index = 0; index < prices.length; index ++) {
    if(index === 0) {
        prices[index]=1.00;
    }else if(index === 2) {
        prices[index]=1.00;
    }else if(index === 6) {
        prices[index]=1.00;
    }
}
console.log(prices);
