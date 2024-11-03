//simplest function
function sayHello() {
    console.log('Hello World')
}

sayHello();

//Paramtera and Argument, No return
function add(num1, num2) { //parameter
    console.log(num1+num2);
}

add(5, 10);  //argument

//return value
function substract(num1, num2){
    return num1 - num2;
}

const result = substract(10,2)
console.log(result)
console.log(substract(20,5));

//Video 03: More on param and Arguments
function registerUser(user = 'Bot') {  //defualt params after E15 update
    //Before ES15 update for default paramter
    // if(!user){
    //     user = 'bot'
    // }
    //user is local to the function
    return user + ' is registrated';
}

console.log(registerUser());
console.log(registerUser('John'));

//Rest Params - can pass unlimiter numbere of argument
function sum1(...number){ 
    return number;
}
function sum2(...numbers){
    let total = 0;
    for(const num of numbers)
        total +=num;
}


console.log(sum1(1,2,3,4,5));
console.log(sum2(1,2,3,4,5,6,100));

//Object as params
function loginUser(user){
    return `The user ${user.name} with the id of ${user.id}.is logged in `
}

const user = {
    id:1,
    name:'Rohit',

};

console.log(loginUser(user));
console.log(loginUser({
    id:2,
    name:'Sejal',
})
);

//Array as params
function getRandom(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];

    console.log(item);
}

getRandom([1,2,3,4,5,6,7,8,9,10]);

//we can also use rest paramter that will turn any parameter into array

/**
 * function getRandom(...arr){ //same code)
 * 
 * getRandom(1,2,3,4,5,6,7,8,9,10)
 */


//video 04: Gobal and Function scope


const x = 100; //gobal scope

console.log(x,'in global')
function run() {
    console.log(window.innerHeight);
    console.log(x,'in function');
}

run();

if(true){
    console.log(x, 'in block')
}

function add3() {
    const y = 50; //function scope
    console.log(y);
}

add();
//console.log(y); //cannot access 


function add4() {
    const x =1;
    const y = 50; //function scope
    console.log(x+y); //x =1 will overwite x = 100
}

//video 05: Block scope

const e = 100;

if(true)
{
    const y = 200;
    console.log(x + y);
}

//console.log(x+y); // this wont work as y has block scope

for(let i = 0; i<=10; i++)
{
    console.log(i)
}

//console.log(i); //this won't work bcoz of block scope 

//diff between var ans let

if(true) {
    const a =500;
    let b = 600;
    var c = 700;
}

//console.log(a); //error
//console.log(b); //error
console.log(c); //now c is not block scope

function run1()
{
    var d = 100;
    console.log(d)
}

run1();

//console.log(d); //you cannot use var declared inside function block, it can be used for block and loop scope

const foo = 1;
var bar = 2; //this actual got added in window object

//Video 06: Nested Function

function first() {
    const x = 100;

    function second() {
        const y =200;
        console.log(x+y);
    }
    second();
}
first();

//for block

if(true){
    const x = 100;
    if(x === 100) {
        const y =200;
        console.log(x+y);
    }

    //console.log(y); not accessible
}

//video 07: Declaration vs Expression

//Function declaration
function addDollarSign(value) {
    return '$' + value;
}

console.log(addDollarSign(100));

//Function Expression
const addplusSign = function(value) {
    return '+' + value;
};

console.log(addplusSign(200))

//Hositing-Moving all the function and variable declaration and put it at the top of the code


//video 08: Array  function

// function add5(a,b){
//     return a+b;
// }

//Arraow function syntax
const add5 = ()=>{
    return a+b;
};
//implicit return
const subtract = (a,b)=> a-b;

//can leave off with a single param
const double = a => a*2;

//Returning an object
const createObj = () => ({
    name:'Rohit',
});

//Callback function
const number = [1,2,3,4,5];
number.forEach(function(n) {
    console.log(n);
});
//Arrow function in a callback
number.forEach(n=>console.log(n));
console.log(add(1,2));
console.log(subtract(1,2));
console.log(double(2));
console.log(createObj());

//vide0 09: Immediate invoke function expression
//Invoke after function defination - to avoid gloabal scope pollution

//suppose you have declare a global varaible which is already 
//present in a seperate file now to avoid error we can use IIFE to declare it in it local scope 

(function() {
    const user = 'Rohit';
    console.log(user);
    const hello = () => console.log('Hello from the IIFE');
    hello();
})();

(function (name){
console.log('Hello '+name);
}) ('Shawn')

// (function hello(){
//     console.log('Hello');
// })();

//video 10: Challenge 1

function getCelsius(f) {
    const celsius = (f-32)*5 /9;
    return celsius;
}

const getCelsius1 = (f) => ((f-32)*5)/9;
console.log(getCelsius(40));
console.log(`The temp is ${getCelsius} \xB0C`);


//Challange 2
function minMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    console.log(min);

    return {
        min,
        max,
    };
}

console.log(minMax([1,2,3,4,5]));


//Challange 3

/**
 * Create a IIFE that takes in the lenth of a rectangle output it to the 
 * console in a messgae as soon as the page loads.
 */
((length, width)=>{
    const area = length * width;
    const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}`
})(10,5);

//Video 11: Execution Context
//Refer PPT

//Video 12 & Video 13 
//Refer PPT
