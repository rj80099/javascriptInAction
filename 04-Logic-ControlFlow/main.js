//video 01: if Statement
if(true) {
    console.log('This is true')
}

const x = 10;
const y =5;

if(x>y){
    console.log(`${x} is greater then ${y}`);
}

if(x===y){
    console.log(`${x} is equal to ${y}`);
}else{
    console.log(`${x} is NOT equal to ${y}`);
    
}

if(x!==y){
    var z = 20;
    //const z =20 //better to use const or let for block level scope
    console.log(`${z} is 20`);
}

console.log(z); //this will work as var not block scope 

//shorthand if
if(x===y) console.log(`${x} is equal to ${y}`),
          console.log('This is true');
else console.log(`${x} is NOT equal to ${y}`);

//video 03: if else & Nesting

const d = new Date(10,30,2022,8,0,0);
const hour = d.getHours();

if(hour < 12) {
    console.log('Good Morning');
} else if(hour < 16) {
    console.log('Good Afternoon');
}
 else {
    console.log('Good Night')
}

//Nested if
if(hour < 12) {
    console.log('Good Morning');
    if(hour == 6){
        console.log('Wake Up')
    }
} else if(hour < 16) {
    console.log('Good Afternoon');
}
 else {
    console.log('Good Night')
    if(hour >= 20)
    {
        console.log('zzzzzzzzzzzz');
    }
}

if(hour === 6 || hour === 20)
{
    console.log('Brush our teeth')
}

//video 04: Switch
const r = new Date(2022,1,10,8,0,0);
const month = r.getMonth();

switch(month) {
    case 1:
        console.log('It is January');
        break;
    case 2:
        console.log('It is February');
        break;
    case 3:
        console.log('It is March');
        break;
    default:
        console.log('None of the month');
}
const hours = d.getHours();

switch(hours) {
    case hours < 12:
        console.log('Good morning');
        break;
    case hours < 18:
        console.log('Good Afternoon');
        break;
    case hours > 20:
        console.log('Good night');
        break;
    default:
        console.log('None of them');
}

//video 05 : Calculator Challenge
function calculator(num1,num2,operator){
    let result;

    switch(operator)
    {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid Operator'
    }
    console.log(result);
    return result
}

calculator(5,2,'+');
calculator(5,2,'-');
calculator(5,2,'*');
calculator(5,2,'/');
calculator(5,2,'#');

//Video 06: Truthy & Falsy
const email = 'test@test.com'; //string is always truthly

if( email){
    console.log('you passed in an email')

}
console.log(Boolean(email));

//Falsy Values:
// - false
//- 0
//-"" or '' {Empty string}
//- null
//- undefined
//- NaN

//Truthy
//- everything else that is not falsy
// - true
// - '0' (0 is a string)
// - ' ' (space in a string)
// - [] (empty array)
// - {} (empty object)
// - function () {} (empty function)

const x2 = false;

console.log(Boolean(x2))


//Truthy and falsy caveats

const children = 0;

//if(children){ //this will falsy value
//if(children!=undefine) //this will give truthy value
if(!isNaN(children)) //this will give truthy value
{

    console.log(`you have ${children} children`);

}
else {
    console.log('Please enter number of children')
}

//Checking for empty array
///const posts = ['Post one', 'Post Two'];
const posts = []; //empty array is truthy

//what we can do here is to check the  length property
if(posts.length>0){
    console.log('List posts');
}else {
    console.log('No posts ');

}

//checking for empty object

const user = {} //results in truthy 

//what we do here is to get the keys of all the object and then use the length proprty as the keys will be an array.


if(Object.keys(user).length>0) {
    console.log('List User');
}
else 
    console.log('No User')

//Loose Equality 
console.log(false === 0);
console.log(''=== 0);
console.log(null === undefined);

//Video 07: Logical Operator

console.log(10> 20 && 30>15 && 40>30);
console.log(10 >20 || 30>15); //true


//&& - will return first falsy value ot the last value
a = 10 && 20; //20
console.log(a);
a = 10 && 20 && 30; //30
console.log(a);
a = 10 && 0 && 20; //0
console.log(a);
a = 10 && '' && 0 && 20; //''
console.log(a);

//Use cases 
const posts1 =['Post One', 'Post Two'];
console.log(posts1[0]); //this is give undefined

//but if we check the length the length first then the post is neglected
posts1.length>0 && console.log(posts1[0]); //this is give undefined


//|| - will return the first thruthy value or the last value.
let b;

b = 10 || 20; //10
console.log(b);
b = 0 || 20;
console.log(b); //20
b = 0 || null || '' || undefined; //undefined
console.log(b);

//?? - Return the right side operant when the left is null or undefined

let c;
c= 10 ?? 20; //10
console.log(c);
c= null ?? 20; //20
console.log(c);
c= undefined ?? 20; //30
console.log(c);
c= 0 ?? 20; //0
console.log(c);
c= '' ?? 20; //''
console.log(c);

//Video 08: Logical Assignment

 //||= assigs the right side value only if the left is a falsy value.
a = false;

if(!a){
    a =10;
}

a = a||10;
a ||=10;
console.log(a);

 //&&= assign the right side value only if the left is a truthy value.
 b = 20;

if(b){
    b =20;
}
b = b && 20;
b ||=20;
console.log(a);

 //??= assign the right side value only if the left is null or undefined.

 c = undefined;
 if (c===null || c === undefined){
    c = 20;
 }

 c = c??20;

 console.log(c)

 //Video 09: Ternary Operator

 const age = 19;

 //using an if statement
 if(age >=18) {
    console.log('You can vote');
 }else
    console.log('You cannot vote')

//using a ternary operator

age >= 18?console.log('you can vote'):console.log('You cannot vote');

//Assigning a conditional value to a valriable
const canVote = age>=18 ? true : false;
console.log(canVote);

//Multiple statements
const auth = true;
//let redirect;

// if(auth) {
//     alert('Welcome to the dashboard');
//     rediect ='/dashboard';
// }
// else  {
//     alert('Access denied');
//     redirect = '/login';
// }

const redirect = auth 
                ? (alert('Welcome to the dashboard'),'/dashboard') 
                : (alert('Access denied'),'/login');

console.log(redirect);

//Only have if part
auth ? console.log('Welcome to the dashboard'): null;

//shorthand
auth &&  console.log('Welcome to the dashboard'); //most use case
