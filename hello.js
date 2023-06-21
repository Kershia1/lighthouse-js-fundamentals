> const sayHello  = function (name) {
  ...   console.log("Hello, " + name);
  ... }sayHello("Caliban");
  }sayHello("Caliban");
   ^^^^^^^^
  
  Uncaught SyntaxError: Unexpected identifier
  > sayHello("Miranda");
  Uncaught ReferenceError: sayHello is not defined
  > sayHello("Ferdinand");
  Uncaught ReferenceError: sayHello is not defined
  > 