// // >>>>>>>>>>>>>>>>>>>>>>>>>>>> Assignment operators <<<<<<<<<<<<<<<<<<<<<<<<

// // =  Assignment      let a = 10;
// // ==  Equality   10==10
// // === Identity  10===10.0
// // <  Less than  10<20
// // >  Greater than  20>10
// // <= Less than or equal to  10<=10
// // >= Greater than or equal to  20>=10
// // != Not equal to  10!=20
// // !== Not equal value or type 10!==10.0

// // >>>>>>>>>>>>>>>>>>>>>>>>Arthmatic operators<<<<<<<<<<<<<<<<<<<<<<<<

// // +  Addition      

// a = 10;
// b = 20;
// console.log(a+b);

// // -  Subtraction   20-10
// console.log(b-a);
// // *  Multiplication  10*20
// console.log(a*b);

// // /  Division  20/10
// console.log(b/a);
// // %  Modulus  20%10
// console.log(b%a);
// // ** Exponentiation  10**2
// console.log(a**2);
// // ++ Increment  a++ or ++a
// a++;
// console.log(a);
// // -- Decrement  a-- or --a
// a--;
// console.log(a);

// // >>>>>>>>>>>>>>>>>>>logical operators<<<<<<<<<<<<<<<<<<<<<<<<

// // &&  Logical AND  (a>10 && b>10)
// let a = 10;
// let b = 20;
// console.log(a > 5 && b > 15); // true
// // ||  Logical OR  (a>10 || b>10)
// console.log(a > 15 || b > 15); // true
// // !  Logical NOT  !(a>10)
// console.log(!(a > 5)); // false

// let age = 20;
// let state = "Pakistan";
// if (age >= 18 && state == "canada") {
//     console.log("You can vote for Canada");
// }else if(age>= 18 || state == "Pakistan") {
//     console.log("You can vote for Pakistan");
// }
// else {
//     console.log("You are not eligible to vote");
// }

// let age =18

// if (age<20) {
//     console.log("you are teen ager:");
//     if (age>16) {
//         break;
//     }
// } else {
    
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>switch statement <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


let age = prompt("Enter your age");
age = Number(age);

switch (true) {
    case age > 10 && age < 15:
        console.log("You are a child");
        break;
    case age > 15 && age < 18:
        console.log("You are a middle student");
        break;
    case age >= 18:
        console.log("You are eligible to vote");
        break;
    default:
        console.log("You are not eligible to vote");
        break;
}
