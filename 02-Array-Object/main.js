//video 02: Creating an array
let x;

//Array literal
const numbers = [12, 45, 33, 29, 39];
console.log(numbers);

//Array Construtors
const fruits = new Array("apple", "grape", "orange");
console.log(fruits);

x = numbers[0]; //accessing 1st elem.

//using inside template literals
x = `My favorite friuts is ${fruits[2]}`;
console.log(x);

//get length of an array
x = numbers.length;
console.log(x);

//change the elem
fruits[2] = "pear";
console.log(fruits);

//change the length of the array
//fruits.length=2;
//console.log(fruits);

//adding elem at last index..
//fruits[3]='mangoes'; //...we can do better then this
fruits[fruits.length] = "mangoes";
console.log(fruits);

//video 03: Basics array methods

const arr = [34, 55, 95, 20, 15];

arr.push(100); //add element at the end
arr.pop(); //remove element from the end
console.log(arr);

arr.unshift(99); //add the element at begining
arr.shift(); //remove element at the begining
console.log(arr);

arr.reverse(); //reverse the entire element from the array.
console.log(arr);

//check if element exist
x = arr.includes(200);
console.log(x);

//get the index of an element
x = arr.indexOf(15);
console.log(x);

//array slicing
x = arr.slice(1, 4);
console.log(x);

//array splicing
//x = arr.splice(1, 4); //it plick or remove array elements from the original element thus modify the original array
//console.log(x);

//chain method
x = arr.splice(1, 4).reverse().toString().charAt(0);

console.log(x);

//Video 04: Nesting, Concat & Spread Operator

//Nesting: Array as in index of another array.

const fruits = ["apple", "pear", "orange"];

const berries = ["str"];
