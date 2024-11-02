//  #Reduce
//  #Filter 
//
// 1.Given an array of numbers, write a function that returns only the even numbers using the filter() method.
// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]

// let array = [1, 2, 3, 4, 5, 6]
// let result = array.filter(number => number % 2 == 0);
// console.log(result);


// 2.given an array of user objects with properties name and age. Write a function that returns only the users who are older than 25.
// Input:

// [
//   { name: "Alice", age: 23 },
//   { name: "Bob", age: 27 },
//   { name: "Charlie", age: 30 }
// ]
// Output:
// [
//   { name: "Bob", age: 27 },
//   { name: "Charlie", age: 30 }
// ]

// let arrayOfObjects = 

// [
//     { name: "Alice", age: 23 },
//     { name: "Bob", age: 27 },
//     { name: "Charlie", age: 30 }
// ]

// let result = arrayOfObjects.filter(resultObj => resultObj.age >= 25)
// console.log(result);

//#

// 3.Write a function that takes an array and returns a new array with only unique values, filtering out duplicates.
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]


// #--in-complete-logic------------------------------------------------------------------------------------------------------------------

// let array = [1, 2, 2, 3, 4, 4, 5] 

// let result = array.filter((a,b)=>b-a)
// console.log(result);

//------------------------------------------------------------------------------------------------

//done 

// let arr = [1, 2, 2, 3, 4, 4, 5];
// let resultArr = arr.filter((value, index) => arr.indexOf(value) === index);

// console.log(resultArr);

//--------------------------------------------------------------------------------------------

// let arr = [1, 2, 2, 3, 4, 4, 5];
// let resultArr = [...new Set(arr)];

// console.log(resultArr);

//--------------------------------------------------------------------------------------------

//# incomplete logic 
// let result = arr.filter(value => {
//     for (let i = 0 ; i < arr.length ; i++){
//         for (let j = 0 ; j < arr.length ; j++){
//             arr[j] === i 
//         }
//     }
// });
// console.log(result);



//#

// 4.Write a function that filters out all falsy values from an array. Falsy values in JavaScript are false, 0, "", null, undefined, and NaN.
// Input: [0, "hello", false, "", undefined, 42]
// Output: ["hello", 42]

// #incomplete logic 

//let result = array.filter(values =>  ( typeof values !=  || values != false || values != "" || values != null || values != undefined || values != NaN )   )

//done 

// let array = [0, "hello", false, "", undefined, 42] 
// let result = array.filter(Boolean)
// console.log(result);

//-----------------------------------------------------------

// let array = [0, "hello", false, "", undefined, 42];
// let result = array.filter(value => value);

// console.log(result);


// 5. Given an array of numbers, return a new array that includes numbers that are either divisible by 3 or greater than 20.
// Input: [3, 12, 19, 21, 25, 30]
// Output: [3, 12, 21, 25, 30]

// let array = [3, 12, 19, 21, 25, 30]
// let filter = array.filter(values => (values % 3 == 0) || (values >= 20) )
// console.log(filter);


// 6.Write a function that returns the product of all numbers in an array using the reduce() method.
// Input: [1, 2, 3, 4]
// Output: 24

// let array = [1, 2, 3, 4]
// let result = array.reduce((value , index) => value * index)
// console.log(result);


//#

// 7.Question: Write a function that counts the occurrences of each value in an array using the reduce() method.
// Input: ["apple", "banana", "apple", "orange", "banana", "apple"]
// Output:
// { apple: 3, banana: 2, orange: 1 }


// function countOccurrences(arr) {
//     return arr.reduce((accumulator, currentValue) => {
//         if (accumulator[currentValue]) {
//             accumulator[currentValue] += 1;
//         } else {
//             accumulator[currentValue] = 1;
//         }
//         return accumulator;
//     }, {});
// }

// const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
// const result = countOccurrences(fruits);
// console.log(result); 

//----------------------------------------------------------------------------------------

//# different logic 

// let array = ["apple", "banana", "apple", "orange", "banana", "apple"]

// let result = array.reduce((obj , fruits)=>{
//     obj[fruits] = (obj[fruits] || 0) + 1;
//     return obj 
// }, {});

// console.log(result);

//#

// 8.Write a function that flattens a nested array using the reduce() method.
// Input: [1, [2, 3], [4, [5, 6]]]
// Output: [1, 2, 3, 4, 5, 6]


// function flattenArray(nArray) {
//     return nArray.reduce((accumulator, currentValue) => {
//         if (Array.isArray(currentValue)) {
//             return accumulator.concat(flattenArray(currentValue));
//         } else {
//             return accumulator.concat(currentValue);
//         }
//     }, []);
// }


// const input = [1, [2, 3], [4, [5, 6]]];
// const output = flattenArray(input);
// console.log(output); 



//-------------------------------------------------------------------------------------------------


// let flatArray = (arr) => {
//     return arr.reduce((acc, val) =>
//         Array.isArray(val) ? acc.concat(flatArray(val)) : acc.concat(val), []);
// };

// const arr = [1, [2, 3], [4, [5, 6]]];
// const flatResult = flatArray(arr);

// console.log(flatResult);



// 9.Given an array of objects, write a function that groups the objects by a specific property using the reduce() method.
// Input:
// const people = [
//   { name: "Alice", group: "A" },
//   { name: "Bob", group: "B" },
//   { name: "Charlie", group: "A" },
//   { name: "David", group: "B" }
// ];
// Output:
// {
//   A: [{ name: "Alice", group: "A" }, { name: "Charlie", group: "A" }],
//   B: [{ name: "Bob", group: "B" }, { name: "David", group: "B" }]
// }


//#

// const people = [
//     { name: "Alice", group: "A" },
//     { name: "Bob", group: "B" },
//     { name: "Charlie", group: "A" },
//     { name: "David", group: "B" }
// ];

// function groupByName(arr, index) {
//     return arr.reduce((accumulator, current) => {
//         let key = current[index];
//         if (!accumulator[key]) {
//             accumulator[key] = [];
//         }
//         accumulator[key].push(current);
//         return accumulator;
//     }, {});
// }

// const groupedPeople = groupByName(people, 'group');

// console.log(groupedPeople);

//#

// 10.Given an array of key-value pairs, write a function that converts the array into an object using the reduce() method.
// Example Input: [['name', 'Alice'], ['age', 25], ['job', 'Engineer']]
// Expected Output: { name: 'Alice', age: 25, job: 'Engineer' }

// let array = [['name', 'Alice'], ['age', 25], ['job', 'Engineer']]

// let result = array.reduce((obj , [key , value])=>{
//     obj[key] = value;
//     return obj;
// }, {});


// console.log(result);



// note learn : object recursion 

