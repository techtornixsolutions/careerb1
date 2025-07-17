// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>constant <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// const Name = "Ali";
// console.log(Name);


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Conditional Statements<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// let age = 17;

// let age = prompt("Enter your age:");
// age = parseInt(age);
// if (age >= 18) {

//     if(age %2==0){
//         document.writeln("You are Eligible to vote and your age is even.", " Your age is: " , age+20);
//     } else{
//         document.writeln("You are only Eligible to vote ");
//     }


// } else if (age > 0 && age < 18) {
//     document.writeln("You are not Eligible to vote.");
// }

// if user enter 1 , 2, 3 ,4 ,5 ,6 ,7 show monday tuesday etc
let day = prompt("Enter a number between 1 and 7:");
day = parseInt(day);

switch (day) {
    case 1:
        document.writeln("Monday");
        break;
    case 2:
        document.writeln("Tuesday");
        break;
    case 3:
        document.writeln("Wednesday");
        break;
    case 4:
        document.writeln("Thursday");
        break;
    case 5:
        document.writeln("Friday");
        break;
    case 6:
        document.writeln("Saturday");
        break;
    case 7:
        document.writeln("Sunday");
        break;


    default:
        document.writeln("Invalid input. Please enter a number between 1 and 7.");
        break;
}


let day1 = prompt("Enter a number between 1 and 7:");
if (day1 == 1) {
    document.writeln("Monday");
} else if (day1 == 2) {
    document.writeln("Tuesday");
}
