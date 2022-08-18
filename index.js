function printName() {
  console.log("printName Function");
  console.log("Second Line");
}

function sayHello(name) {
  console.log("Hello " + name);
}
sayHello("Asif");
sayHello("Zaid");
sayHello(4);

function printSquare(value) {
  console.log("Square of  " + value + " is " + value * value);
}
printSquare(2);
printSquare(3);
printSquare(4);

function printSquare(value) {
  console.log("Square of  " + value + " is " + 2 * value);
}
for (let i = 0; i < 6; i++) {
  printSquare(i);
}

function printArea(length, width) {
  console.log("Area =  " + length * width);
}
function printPerimeter(length, width) {
  console.log("Perimeter =  " + (length + width + length + width));
}
printArea(6, 4);
printPerimeter(6, 4);

console.log("sum = " + (1 + 1));
function printAreaPerimeter(length, width) {
  console.log("Area =  " + length * width);
  console.log("Perimieter =" + (length + width + length + width));
}
printAreaPerimeter(6, 4);

function twoValues(value1, value2) {
  if (value1 == undefined) {
    console.log("Value1 is not provided " + "Value2 = " + value2);
  } else if (value2 == undefined) {
    console.log("Value1 = " + value1 + " Value2 is not given");
  }
}
twoValues();

function twoValues(value1, value2 = "Not give") {
  console.log("Value1 = " + value1 + " Value2 = " + value2);
}
twoValues();
