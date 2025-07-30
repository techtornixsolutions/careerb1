
// // --------------------------------------> Date Method <------------------------------------------

//  ----> first make a variable and store date method in this and then you can use variable name to use the finctions
//  of date mehtod 

// Current date and time ka object banata hai



const now = new Date();

// // getFullYear(): current year return karta hai (4-digit)
console.log(now.getFullYear());

// // getMonth(): current month return karta hai (0 se 11 tak; January = 0)
console.log(now.getMonth());

// // getDate(): month ka current date (1 se 31 tak)
console.log(now.getDate()); 

// // getDay(): week ka day return karta hai (0 = Sunday, 6 = Saturday)
console.log(now.getDay()); 

// // getHours(): current hour return karta hai (0 se 23 tak)
console.log(now.getHours()); 

// // getMinutes(): current minute return karta hai (0 se 59 tak)
console.log(now.getMinutes()); 

// // getSeconds(): current second return karta hai (0 se 59 tak)
console.log(now.getSeconds()); 

// // getMilliseconds(): milliseconds return karta hai (0 se 999 tak)
console.log(now.getMilliseconds()); 

// // getTime(): January 1, current se le kar ab tak milliseconds count return karta hai
console.log(now.getTime());

// // toDateString(): date ko readable string format mein return karta hai
console.log(now.toDateString()); 

// // toISOString(): date ko ISO 8601 format mein return karta hai
console.log(now.toISOString()); 

// // toLocaleDateString(): local date string return karta hai
console.log(now.toLocaleDateString()); 

// // toLocaleTimeString(): local time string return karta hai
console.log(now.toLocaleTimeString());

// toString(): complete date and time string format mein return karta hai// e.g., "Thu Apr 17 2025 14:30:15 GMT+0000 (UTC)"

