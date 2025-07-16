// >>>>>>>>>>>>>>>>>>>>>Variables and Constants<<<<<<<<<<<<<<<<<<<<<<

let Name = "ali";
let a = 5;

var age = 20;

console.log(age);

var age = 30;
console.log(age);
// >>>>>>>>>>>>>>>>>>>>>Data Types<<<<<<<<<<<<<<<<<<<<<<
// primitive data types
// string, number, boolean, null, undefined, symbol, bigint
let name = "ali"; // string
let age = 20; // number
let isStudent = true; // boolean
let temperature = 36.6; //float
let address = null; // null
let phone; // undefined
let uniqueId = Symbol("id"); // symbol
let bigNumber = BigInt(12345678901234567890); // bigint

// non-primitive data types
// object, array, function
let person = {
    name: "ali",
    age: 20,
    isStudent: true
}; // object

let numbers = [1, 2, 3, 4, 5]; // array

function greet() {
    console.log("Hello!");
} // function


// >>>>>>>>>>>>>>>>>>>>>Operators<<<<<<<<<<<<<<<<<<<<<<
// Arithmetic Operators
let x = 10;
let y = 5;
// addition 
let sum = x + y; 
// console.log("Sum: " , sum);
document.writeln("Sum: " + sum+"<br/>");

// subtraction

let sub = x - y;
// console.log("Subtraction: " , sub);
document.writeln("Subtraction: " + sub + "<br/>");
// multiplication
let mul = x * y;
document.writeln("Multiplication: " + mul + "<br/>");
// division
let div = x / y;
document.writeln("Division: " + div +"<br/>");
// modulus
let mod = x % y;
document.writeln("Modulus: " + mod+ "<br/>");
// exponentiation
let exp = x ** y;
document.writeln("Exponentiation: " + exp+  "<br/>");

// increment
let increment = x++;    
// console.log("Increment: " , increment);
document.writeln("Increment: " + increment + "<br/>");
// decrement
let decrement = x--;
// console.log("Decrement: " , decrement);
document.writeln("Decrement: " + decrement + "<br/>");

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Assignment Operators<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

let a = 10;
let b = 5;

// grater than
let isGreater = a > b;
console.log("Is a greater than b? " , isGreater);
//less than
let isLess = a < b;
console.log("Is a less than b? " , isLess);
// equal to
let isEqual = a == b;
console.log("Is a equal to b? " , isEqual);
// not equal to !
let isNotEqual = a != b;
console.log("Is a not equal to b? " , isNotEqual);
// greater than or equal to
let isGreaterOrEqual = a >= b;
console.log("Is a greater than or equal to b? " , isGreaterOrEqual);
// less than or equal to
let isLessOrEqual = a <= b;
console.log("Is a less than or equal to b? " , isLessOrEqual);
// strict equal to
x = 10;
y = "10";
let isStrictEqual = x === y;
console.log("Is x strictly equal to y? " , isStrictEqual);

// strict not equal to
let isStrictNotEqual = x !== y;
console.log("Is x strictly not equal to y? " , isStrictNotEqual);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Logical Operators<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// Not operator !
// And operator &&
// Or operator ||

let c = true;
let d = false;
let notOpr = !c;
console.log("Not operator: " , notOpr);

let andOpr = c && d;
console.log("And operator: " , andOpr);
let orOpr = c || d;
console.log("Or operator: " , orOpr);

