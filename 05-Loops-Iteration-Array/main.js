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
while (k<=100)
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


//video 09: Array.filter: will return modified array
// YOU WILL BE USING THIS A LOT IN SEARCH BOXES AND FILTERS
const numbers2 = [1,2,3,4,5,6,7,8,9,10];

const evenNumbers = numbers2.filter(function(number2){
    return number2 % 2 == 0;
})

console.log(evenNumbers);

//short version
const evenNumbers1 = numbers2.filter(numbers2=>numbers2 % 2 == 0);

//Same with forEach
const evenNumbers2 = [];
numbers2.forEach(numbers => {
    if(numbers % 2 ==0){
        evenNumbers2.push(numbers);
    }
});

const companies = [
    {name: 'Company One', category: 'Finance', start: 1981, end: 2004},
    {name: 'Company Two', category: 'Retails', start: 1992, end: 2008},
    {name: 'Company Three', category: 'Auto', start: 1999, end: 2007},
    {name: 'Company Four', category: 'Retails', start: 1989, end: 2010},
    {name: 'Company Five', category: 'Technology', start: 2009, end: 2014},
    {name: 'Company Six', category: 'Auto', start: 1987, end: 2010},
    {name: 'Company Seven', category: 'Technology', start: 1986, end: 1996},
    {name: 'Company Eight', category: 'Technology', start: 2011, end: 2016},
    {name: 'Company Nine', category: 'Technology', start: 1981, end: 1989},

];

//get only retail companies
const retailCompanies = companies.filter((company) =>companies.category == 'Retail');
console.log(retailCompanies);

//get companies that started in or after 1980 and ended in or before 2005
const earlyCompanies = companies.filter((company)=>companies.start >=1980 && companies.end <= 2005);
console.log(earlyCompanies);

//get companies that lasted 10 years or more
const longCompanies = companies.filter((company)=>(companies.end - companies.start)>=10 );
console.log(longCompanies);


//Video 10 : Array.map
const numbers = [1,2,3,4,5];

const doubleNumbers = numbers.map((number)=>number * 2);

console.log(doubleNumbers);

//same with foreach

const doubleNumbers2 = [];

numbers.forEach((numbers) =>{
    doubleNumbers2.push(numbers*2);
});

console.log(doubleNumbers2);

//using companies array from previous lecture

//Create an array of company names
const companyName = companies.map((companies)=> companies.name);
console.log(companyName);

//Create an array with just companyName and Category
const companyInfo = companies.map((company) => {
    return {
        name: company.name,
        category: company.category
    };
});
console.log(companyInfo);

//create an array of object with the name and length of each company in years
const companyYear = companies.map((company)=> {
    return {
        name: company.name,
        length: company.end-company.start +' years'
    };
});
console.log(companyYear);

//chain map methods
//generate square root and duble the number
const squareAndDouble = numbers2
.map((number)=>Math.sqrt(number))
.map((sqrt)=>sqrt * 2);
console.log(squareAndDouble);

//Long version
const squareAndDouble2 = numbers2.map(function(number)
{
    return Math.sqrt(number);
    
})
.map(function(sqrt){
    return sqrt*2;
})
.map(function(sqrtDouble){
    return sqrtDouble * 3;
})
console.log(squareAndDouble2);

//chaining different methods
const evenDouble = numbers2
                .filter((number)=>number %2===0)
                .map((number)=>number * 2);
console.log(squareAndDouble2);


//Video 11: Array.reduce: reduce the array to single value.
const numbers3 = [1,2,3,4,5,6,,7,8,9,10];

const sum = numbers3.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
},0) //it started from 0 index then add previuos value woth current value

//short version

const sum1 = numbers3.reduce((acc,cur)=>acc+cur,0);
console.log(sum1);

//using a for loop
const sum3 = () => {
    let acc = 0;
    for(const cur of numbers){
        acc = acc + cur;
    }
    return acc;
}

console.log(sum3);

//shopping cart example
const cart = [
    {id:1,name:'product 1', price: 130},
    {id:1,name:'product 2', price: 140},
    {id:1,name:'product 3', price: 175},
    {id:1,name:'product 4', price: 200},
];

const total = cart.reduce(function(acc,product){
    return acc + product.price;
},0)
console.log(total);

//Array method challenge

//challenge: take the people array and create an array called youngpeople that stores objects with ONLY name and email properties of all the people that are 25 and under. The name property should have the first and last name.

const peoples = [
    {
        firstName: 'Rohit',
        lastName: 'Jain',
        email:'rohit@email.com',
        age: 30,
    },
    {
        firstName: 'Sejal',
        lastName: 'Jain',
        email:'sejal@email.com',
        age: 25,
    },
    {
        firstName: 'John',
        lastName: 'Cena',
        email:'sohn@email.com',
        age: 45,
    },
    {
        firstName: 'Sara',
        lastName: 'Foe',
        email:'sara@email.com',
        age: 45,
    },
    {
        firstName: 'Lora',
        lastName: 'Dune',
        email:'lora@email.com',
        age: 16,
    },
]


const youngpeople = peoples
                    .filter((people)=>people.age <= 25)
                    .map((people)=>({
                                name: people.firstName + people.lastName,
                                email: people.email

                        }));
console.log(youngpeople);

//Challenge: All the positive numbers in the array

const wholeNumber = [2, -30, 50, 20, -12, -8, 7];

const positiveSum = wholeNumber
                    .filter((positiveNumber) => positiveNumber > 0)
                    .reduce(((accumulator, currentValue) =>
                        accumulator+currentValue
                    ),0)

console.log(positiveSum);

//Challenge: Capitalise the first letter of the array element

const words =['coder', 'programmer','developer'];

//My version of solution
//const capitaliseWords = words.map((word)=>word.replace(word.charAt(0),word.charAt(0).toLocaleUpperCase()));

//Tutor version of solution
const capitaliseWords = words.map((word)=>word[0].charAt(0).toLocaleUpperCase() + word.slice[1,word.length]);
console.log(capitaliseWords);