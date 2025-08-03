// closure
function x(){
  var a =100;
  function y(){
    var b = 200
    function z(){
      console.log(a,b);
    }
    z()
  }
  y()
}
x()

// Call y to log the value of a
 // This will log 10 to the console
// The function y is defined but not called, so it won't log anything when x is called.
