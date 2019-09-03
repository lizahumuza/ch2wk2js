   var a = [1,2,3];
   var b = [];
   var c = (a.length) + (b.length);
function fizzBuzz(a, b) 
{  
  if ((c%3)==0) {
      console.log("fizz")
  }
    else if ((c%5)==0) {
      console.log("Buzz")
    } 
      else if ((c%15)==0) {
      console.log("fizzBuzz")
    }  
    else {
        console.log(c) }
}
fizzBuzz();