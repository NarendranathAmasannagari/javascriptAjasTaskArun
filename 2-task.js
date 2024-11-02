// 1. Declare a const variable and try to reassign it. What error does JavaScript throw?
// const a = 4
// a = 6
// console.log(a);
//Uncaught TypeError TypeError: Assignment to constant variable.

// 2. Create a variable that holds a string, a boolean, a number, and an object. Use the typeof operator to display the type of each variable.
// let str = "Hello";
// console.log(typeof(str));

// let flag = true;
// console.log(typeof(flag));

// let num = 100;
// console.log(typeof(num));

// let person = { name: "John", age: 30 };
// console.log(typeof(person));

// 3.Write a JavaScript program to swap two variables using a third variable.

// let a = 5;
// let b = 10;

// console.log("Before swap:");
// console.log("a =", a);
// console.log("b =", b);

// Swap using a third variable
// let temp = a;
// a = b;
// b = temp;

// console.log("After swap:");
// console.log("a =", a);
// console.log("b =", b);

// 4.What happens when you declare a variable without the var, let, or const keyword inside a function? Is it a good practice? Why or why not?

//When you declare a variable without using the var, let, or const keyword inside a function, 
//the variable becomes implicitly global. This means that the variable is 
//added to the global scope (i.e., the window object in browsers) 
//instead of being scoped to the function where it was declared. Here's an example:

// function myFunction() {
//     x = 10;  // No var, let, or const
// }

// myFunction();
// console.log(x);  // Outputs: 10

//In this case, x becomes a global variable even though it was defined inside a function.

//--> Why this is not a good practice:
//Accidental Global Variables: Implicitly creating global variables can lead to bugs. 
//If you accidentally miss the var, let, or const keyword, you might unintentionally modify or 
//create a global variable, which could interfere with other parts of the code.

//Harder to Debug: If a variable is global, it can be accessed and modified from 
//anywhere in your code, making it harder to track where and why its value was changed. 
//This makes debugging and maintaining your code more difficult.

//Polluting the Global Scope: Excessive use of global variables can lead 
//to conflicts between different parts of a program, especially in large projects or 
//when integrating third-party libraries. This pollutes the global namespace and 
//increases the risk of name collisions.

//Performance: Global variables are stored in memory for the entire life of the application, 
//whereas local variables (declared with var, let, or const within a function) 
//are destroyed once the function execution is complete. Keeping unnecessary variables 
//in the global scope can lead to inefficient memory usage.

//->Good Practice:
//Always declare variables with let, const, or var to ensure they are properly scoped 
//and don't unintentionally become global.
//Prefer let and const over var for block scoping and better control 
//of variable behavior. const is recommended for variables that won’t change.

// 5.How can you declare multiple variables on a single line, and what are the potential downsides?

//In JavaScript, you can declare multiple variables on a single line using either var, let, or const. 
//Here's how it can be done and the potential downsides:

// Declaring multiple variables on a single line:
// Using var, let, or const:
// javascript

// let a = 1, b = 2, c = 3;
// const x = 10, y = 20;
// var name = 'Alice', age = 30;
// // In the above examples:

// let and const are block-scoped (introduced in ES6).
// var is function-scoped and can cause hoisting issues, but it is still supported for older code.

// Potential Downsides:
// Readability:

// Like in Python, declaring multiple variables on a single line can reduce code readability, 
// especially when dealing with unrelated variables or complex logic. It's harder for someone reading the code to quickly understand the purpose of each variable.
// javascript

// let width = 10, height = 20, color = 'blue', isVisible = true;

// This line is harder to read and debug compared to breaking it into multiple lines:

// javascript
// Copy code
// let width = 10;
// let height = 20;
// let color = 'blue';
// let isVisible = true;
// Code maintainability:

// When you declare many variables on the same line, it's easier to miss one 
//when you later modify the code. For example, if you need to add a comment or 
//make adjustments to a specific variable, having them grouped on the same line 
//might make the changes less clear.
// const with multiple declarations:

// With const, each declared variable must be initialized 
//(unlike let or var where initialization can be skipped). 
//Declaring multiple constants on one line can lead to confusion if all 
//of them are not intended to be constants or if you forget to initialize them.
// javascript

// const a = 5, b;  // SyntaxError: Missing initializer in const declaration
// Complex Expressions:

// If any of the variables involves a more complex expression or function call, 
// declaring multiple variables on a single line could make it harder to 
// identify which part of the line is causing an error or bug.
// Hoisting Issues with var:

// When using var, all variables declared within a function are hoisted to the top. 
// This means that even though the declaration happens on a single line later in the code, 
// JavaScript treats it as if they were declared at the top of the function. 
// This can lead to unintended behavior:

// javascript

// console.log(a);  // undefined (due to hoisting)
// var a = 10, b = 20;

// Best Practice:
// To avoid these downsides, it’s often better to declare variables on 
//separate lines unless they are tightly related or simple constants. 
//Separate lines enhance code readability, reduce the risk of confusion, 
//and make the code easier to maintain in the long run.

// 6.What is the difference between primitive and non-primitive data types in JavaScript? Provide examples.

// Primitive Data Types in JavaScript:

// String: Represents a sequence of characters.
// javascript
// Copy code
// let name = "Alice";

// Number: Represents both integer and floating-point numbers.
// javascript
// Copy code
// let age = 30;
// let pi = 3.14;

// Boolean: Represents logical values: true or false.
// javascript
// Copy code
// let isActive = true;

// Null: Represents the intentional absence of any object value. It is one of JavaScript’s primitive types.
// javascript
// Copy code
// let value = null;

// Undefined: Represents an uninitialized variable (a variable declared but not assigned a value).
// javascript
// Copy code
// let score;
// console.log(score);  // undefined

// BigInt (introduced in ES2020): Represents numbers larger than the safe integer limit (Number.MAX_SAFE_INTEGER).
// javascript
// Copy code
// let bigNumber = 123456789012345678901234567890n;

// Symbol (introduced in ES6): Represents a unique identifier (often used as keys for object properties).
// javascript
// Copy code
// let uniqueKey = Symbol('key');

// Non-primtive-datatypes

// Objects: A collection of key-value pairs.
// javascript
// Copy code
// let person = { name: "Alice", age: 30 };
// person.age = 31;  // This changes the value of the 'age' property

// Arrays: An ordered list of values.
// javascript
// Copy code
// let numbers = [1, 2, 3, 4, 5];
// numbers.push(6);  // The array is modified

// Functions: JavaScript functions are objects, and they are also considered reference types.
// javascript
// Copy code
// function greet() { return "Hello!"; }

// Date: Represents dates and times.
// javascript
// Copy code
// let today = new Date();

// Example of Primitive vs. Non-Primitive Behavior:

// Primitive Example:

// javascript
// Copy code
// let x = 10;
// let y = x;  // Copies the value
// x = 20;
// console.log(x);  // 20
// console.log(y);  // 10 (y remains unchanged because it's a copy)

// Non-Primitive Example:

// javascript
// Copy code
// let arr1 = [1, 2, 3];
// let arr2 = arr1;  // Copies the reference
// arr1.push(4);
// console.log(arr1);  // [1, 2, 3, 4]
// console.log(arr2);  // [1, 2, 3, 4] (arr2 reflects the change because it refers to the same object)

// 7.Write a program to copy the value of a primitive type and a non-primitive type. Show how changing one affects or doesn't affect the other.
// i)let a = 10;
//   let b = a;
// ii)let obj1 = { value: 10 };
//    let obj2 = obj1;


// Copying a Primitive Type (Number)
// let num1 = 42;
// let num2 = num1;  // Copy the value

// console.log("Primitive Types:");
// console.log("num1:", num1);  // Output: 42
// console.log("num2:", num2);  // Output: 42

// // Modify num1
// num1 = 100;
// console.log("\nAfter modifying num1:");
// console.log("num1:", num1);  // Output: 100
// console.log("num2:", num2);  // Output: 42 (remains unchanged)

// // Copying a Non-Primitive Type (Array)
// let arr1 = [1, 2, 3];
// let arr2 = arr1;  // Copy the reference

// console.log("\nNon-Primitive Types:");
// console.log("arr1:", arr1);  // Output: [1, 2, 3]
// console.log("arr2:", arr2);  // Output: [1, 2, 3]

// // Modify arr1
// arr1.push(4);
// console.log("\nAfter modifying arr1:");
// console.log("arr1:", arr1);  // Output: [1, 2, 3, 4]
// console.log("arr2:", arr2);  // Output: [1, 2, 3, 4] (arr2 reflects the change)


// 8.How does JavaScript handle the comparison between primitive and non-primitive data types? Provide an example with == and ===.

// Primitive comparison
// let x = 100;
// let y = '100';

// console.log(x == y);   // true (type coercion: string '100' is converted to number 100)
// console.log(x === y);  // false (strict comparison: number vs string)

// // Non-primitive comparison
// let objA = { key: 'value' };
// let objB = { key: 'value' };
// let objC = objA;  // objC references the same object as objA

// console.log(objA == objB);  // false (different objects in memory)
// console.log(objA === objB); // false (different objects in memory)
// console.log(objA == objC);  // true (same object reference)
// console.log(objA === objC); // true (same object reference)


//9.Write a program that uses the ternary operator to check if a number is positive, negative, or zero.

// let num = 5;  // You can change this value to test other numbers

// let result = (num > 0) ? "Positive" : (num < 0) ? "Negative" : "Zero";

// console.log(`The number is ${result}.`);


// 10.Use the ternary operator to check if a given number is even or odd.

// let number = 7;  // You can change this value to test other numbers

// let result = (number % 2 === 0) ? "Even" : "Odd";

// console.log(`The number ${number} is ${result}.`);


// 11.Write a function that uses the ternary operator to return the greater of two numbers.

// function getGreaterNumber(num1, num2) {
//     return (num1 > num2) ? num1 : num2;
// }

// // Example usage:
// let result1 = getGreaterNumber(10, 5);
// console.log(`The greater number is ${result1}.`); // Output: The greater number is 10.

// let result2 = getGreaterNumber(3, 8);
// console.log(`The greater number is ${result2}.`); // Output: The greater number is 8.

// let result3 = getGreaterNumber(7, 7);
// console.log(`The greater number is ${result3}.`); // Output: 


// 12.Write a program that uses a ternary operator to determine if a person is eligible to vote (18 years or older).

// function checkVotingEligibility(age) {
//     return (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
// }

// // Example usage:
// let age1 = 20;
// console.log(`Age ${age1}: ${checkVotingEligibility(age1)}`); // Output: Age 20: Eligible to vote

// let age2 = 16;
// console.log(`Age ${age2}: ${checkVotingEligibility(age2)}`); // Output: Age 16: Not eligible to vote

// let age3 = 18;
// console.log(`Age ${age3}: ${checkVotingEligibility(age3)}`); // Output: Age 18: Eligible to vote


// 13.Using a ternary operator, write a program that checks if a given string is empty or not.

// function checkIfStringIsEmpty(str) {
//     return (str === "") ? "The string is empty." : "The string is not empty.";
// }

// // Example usage:
// let str1 = "";
// console.log(checkIfStringIsEmpty(str1)); // Output: The string is empty.

// let str2 = "Hello, world!";
// console.log(checkIfStringIsEmpty(str2)); // Output: The string is not empty.

// let str3 = " ";
// console.log(checkIfStringIsEmpty(str3)); // Output: The string is not empty.
