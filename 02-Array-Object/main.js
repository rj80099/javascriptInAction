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

const fruits1 = ["apple", "pear", "orange"];

const berries = ["strawberries", "blueberry", "rasberry"];

fruits1.push(berries);

console.log(fruits1);

x = fruits1[3][1];
console.log(x); //blueberry

const allFruits = [fruits1,berries];
x =  allFruits[1][0]; //strawberries
console.log(x);

//concat array: adding two different arrays into same level
const fruits2 = ["apple", "pear", "orange"];
x = fruits2.concat(berries);

//another way is to concat is using spead operator(...)
x = [...fruits1, ...berries]; //it took iteam from both array and combine them as one array
console.log(x);

//Flatten Array
const arr1 = [1,2,[3,4],5,[6,7],8];
x= arr1.flat(); //remove the nesting and make it as single/flat array
console.log(x);


//static method on array object
x = Array.isArray("Hello"); //true
console.log(x);
x = Array.isArray(fruits1); //true
console.log(x);
x=Array.from('12345'); //convert string into array
console.log(x);

const a = 1;
const b = 2;
const c = 3;
x= Array.of(a,b,c); //gives array of variables
console.log(x);

//video 5: Challenge 1 and Challenge2

//Challenge 1
const arrCh = [1,2,3,4,5];
arrCh.reverse();
arrCh.push(0);
arrCh.unshift(6);
console.log(arrCh)

//Chalange 2

const arrCh2 = [1,2,3,4,5];
const arrCh3 = [5,6,7,8,9,10];

//Solution1
const arrRes = arr1.slice(0,4).concat(arrCh2);
console.log(arrRes);

//Solution2
const arr4 = [...arrCh2,...arrCh3];
arr4.splice(4,1);
console.log(arr4);


//video 6: Object literal

const person = {
    name: 'Rohit Jain',
    age: '30',
    isAdmin: true,
    address: {
        street: '123 Main st',
        city: 'boston',
        state: 'MA',
    },
    hobbies: ['music', 'sports']
};

x = person.name; //most use case
console.log(x);
x= person['age'];
console.log(x);
x= person.address.state;
console.log(x);
x= person.hobbies[0];
console.log(x);

//update object
person.name = 'sejal jain';
person['isAdmin'] = false;
x= person;

console.log(x);

//item from object
delete person.age;
x= person;
console.log(x);

person.hasChilder = true; //add property
x= person;
console.log(x);
person.greet = function() {
    console.log(`Hello, my name is ${this.name}`)
}
x= person.greet();
console.log(x);

const person2  = {
    'first name': 'Rohit',
    'last name': 'Jain',
}
x= person2['first name'];
console.log(x);

//Video 7: Object spread operator and method


//Initialise using object literals
// const todo = {};

// todo.id = 1;

// x = todo;
// console.log(x)

//intialise using object constructor
const todo = new Object();

todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;

x = todo;

const people = {
    address: {
        coords: {
            lat: 42.943,
            lng: -71.454,
        },
    }
}

x= people.address.coords.lat;

console.log(x)

const obj1 = {a:1,b:2};
const obj2 = {c:3, d:4};

const obj3 ={obj1, obj2}; //combine obj1 & obj2 {obj1,obj2}

const obj4 = {...obj1,...obj2}; //combine properties of both the obj into one object
const obj5 = Object.assign({}, obj1, obj2);
x= obj3;
console.log(x);

//Important: Arrays of objects
const todo1 = [
    {id:1,name:'Buy milk'},
    {id:1,name:'pick kids from school'},
    {id:1,name:'Take out trash'},
];

x = todo1[0].name;
console.log(x);

x = Object.keys(todo).length; //get length of object todo
console.log(x);
x = Object.keys(todo);
console.log(x);

x = Object.values(todo);
console.log(x);
x = Object.entries(todo);//give key value pair to an array.
console.log(x);

x = todo.hasOwnProperty('age');
console.log(x);



//video 8: Destructuring and Naming object
const firstName = 'Rohit';
const lastName = 'Jain';
const age = '30';

const person3 = {
    firstName,     // not need to do this firstName: firstName,
    lastName,      //lastName: lastName,
    age,           //age: age,
};

console.log(person3.age);

//Destructuring

const todo3 = {
    id : 1,
    title : 'Take out trash',
    user: {
        name: 'Rohit Jain',
    }
};

//instead of assigning the property to a value.
//const id = tpdo.id;

const {
id : todoId, //renaming id
title,   //reading title property
user: {name}, //reading name proprty nested inside user property
} = todo3;

console.log(todoId, title,name)

//Destructure array
const number1 = [23, 67,33,49]
//const [first, second] = number1;  //get first 2 element of the array
//console.log(first, second);

const [first, second, ...rest] = number1;
console.log(first, second, rest);


//video 09: JSON - Javascript Object Notation
//Make todo.json 
/*
1. Property and key should be double quote
[
{
"id": "1",
"title":"take out trash"
}

]

*/


const post = {
    id :1,
    title: 'post One',
    body:'This is the body',
};

//convert to JSON string
const str = JSON.stringify(post); //
console.log(str);

//Parse JSON
const obj = JSON.parse(str);
console.log(str);

const posts = [
    {
        id :1,
        title: 'post One',
    body:'This is the body',
    },
    {
        id :1,
        title: 'post One',
        body:'This is the body',
    },
];

const str2 = JSON.stringify(post);
console.log(str2);

//to access any specfic property you need to first parse 


//Video 10: Challenge
const library = [
    {
        titles: 'The Road Ahead',
        author:'Bill Gates',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        titles: 'Steave jobs',
        author:'Walter Isaacson',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        titles: 'Mockinjay',
        author:'Suzanne Collin',
        status: {
            own: true,
            reading: false,
            read: false
        }
    }
];
console.log(library)

//step2 change the status of read for all books to true
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;
console.log(library)

//step3 destructure the title from the first book and rename the variable to firstbook
const {titles: firstbook} = library[0];
console.log(library)


//step3 : Turn library object to JSON

const libraryJSON = JSON.stringify(library)
console.log(library)