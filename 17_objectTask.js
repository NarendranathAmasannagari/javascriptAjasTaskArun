// Objects tasks
// 23-OCT-2024

// 1. Creating an Object
// Question: How can you create an object representing a person with the properties name as 'Alice' and age as 25?

// let givenObject = {
//     "name":"Alice",
//     "age" : 25
// }

// console.log(givenObject);


// 2. Accessing Properties
// Question: How can you access the name property of the object { name: 'Alice', age: 25 }?

// let givenObject = {
//     "name":'Alice',
//     "age" : 25
// }

// let accessProperty = givenObject["name"]

// console.log(accessProperty);



// 3. Adding Properties
// Question: How can you add a city property with the value 'Wonderland' to the object { name: 'Alice', age: 25 }?

// let givenObject = {
//     "name":'Alice',
//     "age" : 25
// }

// givenObject["city"] = "Anantapur";
// console.log(givenObject);



// 4. Updating Properties
// Question: How can you update the age property of the object { name: 'Alice', age: 25 } to 26?

// let givenObject = {
//     "name":'Alice',
//     "age" : 25
// }

// givenObject.age = 26 ;
// console.log(givenObject);


// 5. Deleting Properties
// Question: How can you delete the city property from the object { name: 'Alice', age: 25, city: 'Wonderland' }?

// let givenObject = {
//     "name":'Alice',
//     "age" : 25
// }

// delete (givenObject.city)
// console.log(givenObject);


// 6. Checking for Property Existence
// Question: How can you check if the age property exists in the object { name: 'Alice', age: 25 }?


// let givenObject = {
//     "name":'Alice',
//     "age" : 25
// }

// for(let key in givenObject){
//     //console.log(key);

//     if (key == "age"){
//         console.log(true);
//     }
// }

// 7. Iterating Over Object Properties
// Question: How can you iterate over the properties of the object { name: 'Alice', age: 25, city: 'Wonderland' } and log each key-value pair?

// let givenObject = { name: 'Alice', age: 25, city: 'Wonderland' }
// for(let [key , values] in  givenObject.entries){
//     console.log(key , values);

// }


// 8. Copying an Object
// Question: How can you create a shallow copy of the object { name: 'Alice', age: 25 }?

// let givenObject = { name: 'Alice', age: 25, city: 'Wonderland' }
// let copyObject = {}
// for(let key in givenObject){
//     //console.log(key);
//     copyObject[key] = givenObject[key]
// }
// console.log(copyObject);



// 9. Merging Objects
// Question: How can you merge two objects { name: 'Alice' } and { age: 25 } into a single object?

// let objOne = { name: 'Alice' }
// let objSecond = { age: 25 } 
// let mergedObject = {...objOne , ...objSecond}
// console.log(mergedObject);



// 10. Converting Object to Array of Keys and Values
// Question: How can you convert the object { name: 'Alice', age: 25 } to an array of keys and an array of values?

// let givenObject = { name: 'Alice', age: 25 } 
// let arrayOfKeys = []
// let arrayValues = []
// for(let key in givenObject){
//     let sum = []
//     arrayOfKeys.push(key)
//     // arrayValues.push(givenObject[key])
//     //console.log(sum);
// }
// console.log(sum);

// console.log(arrayOfKeys);
// console.log(arrayValues);


// 11. Creating a Deep Copy of an Object
// Question: How can you create a deep copy of an object { a: 1, b: { c: 2 } } so that changes to the copy do not affect the original?

// let givenArray = { a: 1, b: { c: 2 } }
// let deepCopy = {...givenArray}
// console.log(deepCopy);


// 12. Merging Objects Deeply
// Question: How can you merge two objects { a: 1, b: { c: 2 } } and { b: { d: 3 }, e: 4 } deeply?

// let obj1 = { a: 1, b: { c: 2 } }
// let obj2 = { b: { d: 3 }, e: 4 }
// let result  = {...obj1 , ...obj2}
// console.log(result);



// 13. Using Proxies for Advanced Behavior
// Question: How can you use a proxy to intercept and validate changes to an object's properties, such as ensuring the age is a positive number less than 120?



// 14. Defining Computed Properties
// Question: How can you define a computed property fullName for an object that combines firstName and lastName?

// let nameObject = {
//     "first_name" : "Narendranath",
//     "second_name" : "Amasannagari"
// }

// let resultObject= Object.entries(nameObject)

// 15. Using Object.defineProperty for Advanced Property Control
// Question: How can you use Object.defineProperty to create a non-writable, non-configurable property a with the value 42?



// 16. Iterating Over Object Properties with for...of and Object.entries
// Question: How can you iterate over the properties of an object { name: 'Alice', age: 25, city: 'Wonderland' } and log each key-value pair?

const person = { name: 'Alice', age: 25, city: 'Wonderland' };

for (let [key, value] of Object.entries(person)) {
    console.log(key,value);
}
