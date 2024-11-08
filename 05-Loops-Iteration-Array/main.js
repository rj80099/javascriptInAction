//Video 02- Loop

// for([initialExpress]; [conditionExpression];[incrementExpression])
//     statement;

//INITIAL EXPRESSION - Initialize a variable/counter
//CONDITION EXPRESSION - Condition that the loop will continue to run as long as it is met or until the condition is false.
//INCREMENT EXPRESSION - Expression that will be executed after each iteration of the loop. Usually increment the variable.
//STATEMENT - Code that will be executed each time the loop is run, to execute a `block` of code, use the `{}` suntax

for (let i = 0; i <= 10; i++)
{
    console.log(i);
}

//Nest loops
for(let i = 1; i<=10;i++)
{
    console.log('Number '+i);
    for(let j = 0; j<=5;j++)
    {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

//loop through an array
const names = ['Rohit', 'Sejal', 'Trapti'];

for(let i = 0; i<=names.length;i++)
{
    console.log(names[i]);
}

//Video 03: break & continue

for(let i =0; i<=20; i++){
    if(i === 15)
    {

        console.log('Breaking...');
        break;
    }
    console.log(i);
}


//continue

for(let i = 0; i<=20; i++){
    if(i === 13)
    {
        console.log('Skipping 13...');
        continue;
    }
    console.log(i);
}

//Video 04: While & Do while loops

//Recommend: when we don't know when to stop loop use while loop
let i =0;
while(i<20){
    console.log('Number '+i);
    i++;
}

//loop over array
const arr = [10,20,30,40];
while(i<arr.length){
    console.log(arr[i]);
    i++;
}

//Nesting while loops
while(i<=5)
{
    console.log('Number '+i);

    let j =1;
    while(j<=5)
    {
        console.log(`${i} * ${j}=${i*j}`)
    j++;
    }
    i++;
}

//do-while true

do{

    console.log('Number ' +i);
    i++;

}while(i <= 20);

//Video 05:  FizzBuzz challenge

//for loop
for(let i =0; i<=100; i++)
{
    if(i % 15 === 0)
    {
        console.log('FizzBuzz')
    }
    else if(i % 3 === 0 ){
        console.log('Fizz');

    }
    else if(i % 5 === 0){
        console.log(i);
    }
    else {
        console.log(i);
    }
}

//while loop
let k =1;
while (j<=100)
{
    if(k % 15 === 0)
        {
            console.log('FizzBuzz')
        }
        else if(k % 3 === 0 ){
            console.log('Fizz');
    
        }
        else if(k % 5 === 0){
            console.log('Buzz');
        }
        else {
            console.log(k);
        }
    k++;

}

//Video 06 : For Of loop

const items = ['book', 'table', 'chair', 'kite'];

// for(let i = 0;i <= items.length; i++)
// {
//     console.log(items[i])
// }
//loop through arrays
for(const item of items)
    {
        console.log(item);
    }
const users = [
    {name: 'Brad'},
    {name: 'Kate'},
    {name: 'Steve'}
]

for(const user of users)
{
    console.log(user.name);
}
//Loop over strings
const str ='Hello world';

for(const letter of str)
{
    console.log(letter);
}

//Loop over maps
const map = new Map();
map.set('name','john');
map.set('age',30);

for(const [key,value] of map){
    console.log(key,value);
}

//Video 07: For in loop

//it can loop through object literal
const colorobj = {
    colo11: 'red',
    colo12: 'blue',
    colo13: 'orange',
    colo14: 'green',
};

for (const key in colorobj)
{
    console.log(key), colorobj[key];
}

//iterate through array
const colorArr = ['red','green','blue','yellow'];
for(const key in colorArr)
{
    console.log(colorArr[key]);
}

//From now on we are going to start with high order array method.
//video 08: Array.forEach 

const socials = ['Twitter', 'LinkedIn', 'Facebook', 'instagram'];

//console.log(socials.__proto__);

// socials.forEach(function (item){
//     console.log(item)
// });
//socials.forEach((item) =>console.log(item));
socials.forEach((item,index,arr)=>console.log(`${index} - ${item}`),arr);

function logSocial(social) {
    console.log(social);
}

socials.forEach(logSocial); //passed only callback function

const socialObjs = [
    {name: 'Twitter',url: 'https://twitter.com'},
    {name: 'Facebook',url: 'https://facebook.com'},
    {name: 'Instagram',url: 'https://instagram.com'},

]

socialObjs.forEach((item) => console.log(item.url));