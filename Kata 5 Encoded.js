const urlEncode = function(text) { // est ea as array
  let string = [
    "Lighthouse Labs",
    " Lighthouse Labs ",
    "blue is greener than purple for sure",
  ];

  for (i = 0; i < string.length; i++) { // work across
    string[i] = string[i].trim().replace(/\s/g, "%20"); // chained methods together
    // find and replace WS with Car in string, trim ends
  }
  return string;
};
console.log(urlEncode("Lighthouse Labs")); //Lighthouse%20Labs
console.log(urlEncode(" Lighthouse Labs ")); //Lighthouse%20Labs
console.log(urlEncode("blue is greener than purple for sure")); //blue%20is%20greener%20than%20purple%20for%20sure
