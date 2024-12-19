/*99 bottles of juice on the wall! 99 bottles of juice! Take one down, pass it around... 98 bottles of juice on the wall!
98 bottles of juice on the wall! 98 bottles of juice! Take one down, pass it around... 97 bottles of juice on the wall!
...
2 bottles of juice on the wall! 2 bottles of juice! Take one down, pass it around... 1 bottle of juice on the wall!
1 bottle of juice on the wall! 1 bottle of juice! Take one down, pass it around... 0 bottles of juice on the wall!*/ 
// this is the string that I want to output with a loop i-- (decrementing my 1)

var num = 99; // where to start 
while (num >= 1) {//stop conidition here for plurealization
  if(num === 1) {
  console.log(num + 'bottles of juice on the wall! +num+ bottles of juice! + num+ Take one down, pass it around... +(num -1) bottles of juice on the wall');
  } // section tranisitioning from multiple bottles to 1 bottle
    else if (num === 2) {
      console.log(num + 'bottles of juice on the wall! +num+ bottles of juice! + num+ Take one down, pass it around... +(num -1) bottle of juice on the wall');
    }
    else ( num <= 1) {
      console.log( num + 'bottle of juice on the wall!' +num+ 'bottle of juice! Take one down, pass it around...' + (num -1)+ 'bottles of juice on the wall!')
      {
  //section transitioning to now bottles 
  num= num - 1; 
}

    // check value of num
    // print lyrics using num
    // don't forget to check pluralization on the last line!
    // decrement num

  