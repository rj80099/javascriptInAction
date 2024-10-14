
//video 03: 
console.log("Hello World"); //console is object and log is method

const x= 100;

console.log(x)

console.error('Alert');

console. warn('warning')

console.table({name: 'Rohit', email: 'rohit@gmail.com'});

console.group('simple');
console.log(x)
console.error('Alert');
console. warn('warning')
console.groupEnd();
//adding css style in script
const styles = 'padding: 10px; background-color: black; color: green';

console.log('%cHello World', styles);

//video 04:
/*
keyboard shortcut for vs code:
ctrl + right/left: Navigate to start or end of a line
alt + right/left: Navigate through the object of a line
shift + alt + right/left: Select through obejct faster
shift + ctrl + right/left: Selct complete from where you are either right or left.
alt + up/down: move the line up/down.
shift + alt + up/down: duplicate the line up/down.
hold shift : highlight the object currently selected.
ctrl + D: select the next highlighted object in same file.
ctrl + shift + L: make changes on all the highlighted object same same time.
ctrl + shift + O : search for file in search pallate
ctrl + alt + F: look for search string in same file
ctrl + shift + F: look for seach string in all file of the project.
ctrl + B: toggle side bar
ctrl + ~: toggle terminal

*/

//video 05: variable and const

//ways to declare a  variable
//var, let, const

//var is not used much nowaday
let firstName = 'John';
let lastName = 'Doe';

console.log(firstName, lastName);

//if we were to use var in place of let the below comment code won't give an error
//otherwise normally it throws an error
//console.log(firstName, lastName,age);

let age = 30;  

console.log(age);

//Naming conventions:
// - only letter,numbers,underscores and doller signs
// - Can't start with a number

// multi-word formatting 
//firstName = camelCase
//first_name= underscore
//FirstName = Pascalcase
//firstname = lowercase

//re-assgining varibles
age = 31;

console.log(age);

let score;
score = 1;
console.log(score);

const arr = [1,2,3,4];

arr.push(5);

const person = {
    name:'rohit'
}

person.name = 'raj';
person.email = 'rohit@gmail.com'

//Declare multiple value at once.
let a,b,c;

const d=10, e=20, f=30;

console.log(d);
