'use strict';
//scopes
/*
1.Global scope
2.function scope
3.block scope
 */
function calcAge(birthYear) {
    const age = 2024 - birthYear;
    console.log(firstName);

    function printAge() {
        const output = `you are ${age}, born in ${birthYear}`;
        console.log(output);
        if (birthYear >= 1981 && birthYear <= 1996) {
            const firstName = 'Parnapalli';//
            var str1 = "you're millenial";//variables declared using var are function scoped.
            const str = `Oh, and you're a millenial,${firstName}`;//here Parnapalli value will be used because it will search in the block.
        }
        console.log(str1);//only outside of block it is allowed.
    }
    //   console.log(str);//will trow an error, as we cannot access str outside of block.

    printAge();
    return age;
}
const firstName = 'Sahithya';
calcAge(1996)
// console.log(age);//will get error because we can't access function scope varaibles outside of the scope.
// printAge();//we cannot call this function because it is declared inside calcAge function.

//Hoisting: Makes some types of variables accessible/usable in the code before they are actually declared.
/*
                         Hoisted?    Intial Value           scope
 
function declarations       yes       actual function       block
var variables               yes         undefined           function scope
let and const variables     no          uninitialized,TDZ        block
functionexpressions         based on          
and arrow functions         declaration   
 */
//variable hoisting
console.log(me);
//the below 2 lines throws error
// console.log(job);
// console.log(year);


var me = 'sahithya';
let job = 'developer';
const year = 1996;

//function Hoisting
console.log(add(2, 3));
// console.log(addition(10,3));//will throw error as 'addition' is not a function.
// console.log(addTwo(20,30));//will throw error as cannot access 'addTwo' before initialization.
// console.log(addingTwoNumbers(1,10));// Cannot access 'addingTwoNumbers' before initialization


function add(a, b) {
    return a + b;
}
var addition = function (a, b) {
    return a + b;
}
let addTwo = function (a, b) {
    return a + b;
}
const addingTwoNumbers = (a, b) => a + b;

//this keyword
const sahithya = {
    firstName: 'Parnapalli',
    lastName: 'Sahithya',
    year: 1996,
    calcAge: function () {
        console.log(this);//will print the entire sahithya object
        console.log(2024 - this.year);//output will be 28
    },
    greet: () => {
        console.log(this);//will refer to the parent scope.i.e entire window
        console.log(`Hey ${this.firstName}`);//here this indicates window. output will be Hey undefined.
    }
}

sahithya.calcAge();
sahithya.greet();
console.log(this);//entire window.

//Primitive vs object

//primitive type
let age=28;// will store in call stack inside context execution with a memory address for example 003;
let oldAge=age;//oldAge also points to same memory address 003;
age=32;//here it creates a new adress called 004 and now age variable points to 004;
console.log(age);//as age variable is pointing to 004 output will be 32; 
console.log(oldAge)//as oldage is pointing to 003 output will be 28;

//Object reference
//objects are stored inside heap memory
let me1={
    name:'Sahithya',
    age:28
}//object will be created inside heap momery with an adress called 03F and that object reference will be stored in call stack(005 referring to 03F);
let friend=me1;//now friend variable is also pointing to same reference address 005;
friend['age']=29;//now we are changing property of an object which is stored in heap memory. so value will be overidden.
console.log(me1.age);//output will be 29 as me is also referring to same address.
console.log(friend['age']);//output will be 29 as friend is also referring to same address.
