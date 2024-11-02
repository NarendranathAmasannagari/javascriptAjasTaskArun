// The task on forEach and map,
 
// 10/09/2024
 
// 1. forEach and map

//In JavaScript, the forEach() method is used to execute a provided function once for each element 
//in an array. It’s often preferred over a for loop for readability when you need to loop through array elements.

// Syntax:

// javascript

// array.forEach(function(currentValue, index, array) {
//   // Code to execute for each element
// });

//currentValue: The current element being processed in the array.
//index (optional): The index of the current element.
//array (optional): The array that forEach() is iterating over.

// Example:

// javascript

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function(number) {
//   console.log(number);
// });

// Output:

// 1
// 2
// 3
// 4
// 5

// Arrow Function Version:
// You can also use arrow functions with forEach() for a more concise syntax:

// javascript

// numbers.forEach(number => console.log(number));

// Key Points:
// No return value: forEach() always returns undefined and is primarily used for 
//side effects (e.g., logging or modifying an array).
// Can't break the loop: Unlike a for loop, you cannot break out of a forEach() loop 
//early using break or return. If you need this functionality, consider using a regular for loop, for...of, or some() method.


//2. map

//In JavaScript, map() is an array method that creates a new array populated 
//with the results of calling a provided function on every element in the calling array. 
//It doesn't modify the original array but returns a new array.

//Syntax:

//javascript

// array.map(callback(currentValue, index, array), thisArg)

// callback: A function that is called for every element of the array. It takes three arguments:
// currentValue: The current element being processed.

// index (optional): The index of the current element being processed.
// array (optional): The array that map() was called on.
// thisArg (optional): A value to use as this when executing the callback.

// Example:

// javascript

// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map(function(number) {
//   return number * number;
// });

//console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

//In this example, the map() method creates a new array squaredNumbers with each number squared.

// Using Arrow Functions:

// javascript

// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map(number => number * number);

// console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// The map() method is especially useful when you need to apply a transformation or 
// computation to every element in an array.

//-------------------------------------------------------------------------------------------------

// 1.Write array of numbers and returns the sum of its elements using a forEach loop.
 
// const numbers = [1, 2, 3, 4, 5];

//Output: 15

// let sum = 0 
// numbers.forEach(num => sum += num);
// console.log(sum);


// 2.Using the for Each method, write counts the number of even numbers in an array.
 
// Output: 3

// const numbers = [1, 2, 3, 4, 5, 6];
// let count = 0
// numbers.forEach(function(num) {
//     if (num % 2 === 0) {
//         count++;
//     }
// });

// console.log(count);

// 3.Implement squares each number in an array using the map method and returns the new array.log   

// const numbers = [1, 2, 3, 4];

// // // Output: [1, 4, 9, 16]

// let squaredNumbers = numbers.map(num => num * num);

// console.log(squaredNumbers);



// 4.Write array of numbers use a forEach to find the maximum number in an array.
 
// // Output: 8

// let numbers = [3, 5, 7, 2, 8];

// let maxNumber = numbers[0];  

// numbers.forEach((num) => {
//     if (num > maxNumber) {
//         maxNumber = num;
//     }
// });

// console.log(maxNumber);
 
// 5.Implement array of numbers to filter out odd numbers from an array using the forEach method.

// // Output: [2, 4, 6]

// const numbers = [1, 2, 3, 4, 5, 6];

// let evenNumbers = [];

// numbers.forEach((num) => {
//     if (num % 2 === 0) {
//         evenNumbers.push(num);
//     }
// });

// console.log(evenNumbers);

// 6.Write array of numbers using map to add 1 to each element in an array of numbers.

// Output: [2, 3, 4, 5]

// const numbers = [1, 2, 3, 4];

// let incrementedNumbers = numbers.map((num) => {
//     return num + 1;
// });

// console.log(incrementedNumbers);

 
// 7.Write a array of numbers using forEach to remove duplicates from an array.
 
// Output: [1, 2, 3, 4]

// const numbers = [1, 2, 3, 2, 4, 1];

// let uniqueNums = [];

// numbers.forEach((num) => {
//     if (!uniqueNums.includes(num)) { 
//         uniqueNums.push(num);
//     }
// });

// console.log(uniqueNums);


// 8.Write array of numbers use map that doubles each number in an array only if it's greater than 5.

// const numbers = [3, 5, 7, 8];
// // // Output: [3, 5, 14, 16]


// let doubledNumbers = numbers.map((num) => {
//     return num > 5 ? num * 2 : num;  
// });

// console.log(doubledNumbers);
