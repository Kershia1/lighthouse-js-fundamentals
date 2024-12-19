/*
 * Programming Quiz: Facebook Friends (7-5)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `facebookProfile`
 * - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
 * - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
 * - Carefully implement the desired functionality of each method, as decribed above
 */


// TIP - 
// In an array, 
// - addition at the end is done using push() method
// - addition at a specific index is done using splice() method
// - deletion from the beginning is done using pop() method
// - deletion from a specific index is done using splice() method

// your code goes here
/*Create an object called facebookProfile. The object should have 3 properties:*/

var faceBookProfile = {
  name: "Ray", 
  friends: 20,
  messages: ["hi", "bye", "Hello World!"], 
  postMessage:function(message){
      faceBookProfile.messages.push(message);
  },
deleteMessage: function(index) {
if(faceBookProfile.messages.lenght >index) {
  faceBookProfile.messages = faceBookProfile.messages.splice(index, 1); // remeber that splice is another . that is added 
  }
},
addFriend: function(){
if(faceBookProfile.friends > 0) {
  faceBookProfile.friends +=1;
},
removeFriend:function (){
if( faceBookProfile.friends>0) {
  faceBookProfile.friends -1; 
   }
  }
};
