// ---------------------> Array Methods<--------------------------
// let arr = [1,2,3,4,5]
// console.log(arr);

// console.log(arr.length);



// console.log(arr.toString()); //to convert array into string//
// console.log(arr.join("-")) ;//replace , with any thing and like join with any thing you want //
// arr.pop()
// console.log("element pop:",arr)
// console.log(arr.pop()) ;//wehn we use pop it remove last element from end in this case it show the poped element  //
// console.log(arr) // now thi show the exat value of with popining like poped value not inlcude in output//
// arr.push(8) // push is use to add any value at last index
// console.log(arr);


// arr.unshift(9); // add element to the start of an array//
// console.log("unshift: ",arr)

// arr.shift(); //remove element from the first of an array//
// console.log("shift: ",arr)


//  let a = [1, 2];
//  let b = [3, 4];
//  let result = a.concat(b); //merge 2 arrays//
//  console.log(result);

// let ar = [1,2,3,4,5]
// let output = ar.slice(1, 4); // return the copy of the part of an array not change the actual (original) array not include last element like from 1 index to 3 index last index3 not included//
// console.log(output);


//  arr.splice(1, 2);  // remove 2 elements from index 1 and like it remove 1 to 2 and last element 2 include also remove //
//  console.log(arr);

// let arr = [1,2,3,4,5]

// console.log(arr.indexOf(3)); // use to find the indexing value like 2 store on which index //
// console.log(arr.includes(2)); // check if a value exist in an array give true and fals values//

// arr.forEach(item => {
//    console.log(item);
   
//  }); // loop on ann array like print elements in line //


// let result = arr.map(item => item * 2); //Returns a new array by applying a function to each element//
// console.log(result);

// let arr = [1, 2, 3, 4];
// let output = arr.filter(x => x <= 2); // filter value form array//
// console.log(output);

// let result1 = arr.reduce((sum, curr) => sum + curr, 0); // reduce all values of arra in single value like we can say that it summ all array values//
// console.log(result1);

// let arr2 = [5, 12, 18];
// let result2 = arr2.find(x => x > 10);   // return first matching value
// console.log(result2);

// let arr3 = [5, 12, 8];
// let result3 = arr3.findIndex(x => x > 10);  // finde the index where store value
// console.log(result3);

let fruits = ["watermello","mango","banana","Apple","orange"]
fruits.sort()
console.log(fruits);

 let arr4 = [1, 2, 3];
 arr4.reverse();
console.log(arr4);
