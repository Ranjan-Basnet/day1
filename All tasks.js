// Task 1 – Variables and Template Literals
let firstName = "Ranjan";
let lastName = "Basnet";

let greeting = `Hello, ${firstName} ${lastName}!`;
console.log(greeting);

// Task 2 – let and const Scope

{
    let x = 10;
}
console.log(x); 

{
    const y = 20;
}
console.log(y); 



// Task 3 – Arrow Function Simple

const greet = name => `Hello, ${name}!`;
console.log(greet("Ranjan Basnet"));



// Task 4 – Arrow Function with Multiple Parameters

const multiply = (a, b) => a * b;
console.log(multiply(5, 6));



// Task 5 – Object Destructuring

const person = {
    name: "Ranjan Basnet",
    age: 20,
    country: "Nepal"
};

const { name, country } = person;
console.log(name, country);



// Task 6 – Array Destructuring

const numbers = [10, 20, 30, 40];
const [first, second] = numbers;
console.log(first, second);



// Task 7 – Default Parameters

function sayHello(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(sayHello("Ranjan Basnet"));
console.log(sayHello());



// Task 8 – Rest Operator (Sum of Numbers)
function sumAll(...numbers) {
    return numbers.reduce((sum, n) => sum + n, 0);
}

console.log(sumAll(1, 2, 3, 4)); // 10



// Task 9 – Spread Operator with Arrays

const arr1 = [1, 2, 3];
const arr2 = [4, 5];

const mergedArray = [...arr1, ...arr2];
console.log(mergedArray);



// Task 10 – Merge and Destructure Objects

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const mergedObj = { ...obj1, ...obj2 };

const { a, d } = mergedObj;
console.log(a, d);
