function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myFirst() {
    myDisplayer("Hello");
  }
  
  function mySecond() {
    myDisplayer("Goodbye");
  }
  
  myFirst();
  mySecond();





function myDisplayer(some) {
document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
let sum = num1 + num2;
myCallback(sum);
}

myCalculator(5, 5, myDisplayer);