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






