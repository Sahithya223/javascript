let js='amazing';
// if(js==='amazing')
// {
// alert('Javascript is '+js);
// }
console.log(20+10+8-13);
//Data types 1. primitive and non-primitive
/*Primitive types
1.Number
2.String
3.Boolean
4.Undefined( variable declared but value is not assigned)
5.Null(empty value)
6.Symbol(value is unique and can not be changed)
7.BigInt(Larger integers than the Number)*/
//Js has dynamic typing means no need to mention the data type, based on the value assigned to it it will decide the data type.

let firstName='sahithya';
let age=28;
let isSalaried=true;
let maritalStatus;
console.log(firstName, typeof firstName);
console.log(age, typeof age);
console.log(isSalaried, typeof isSalaried);
console.log(maritalStatus, typeof maritalStatus);
console.log(null, typeof null);
maritalStatus='No';
console.log(maritalStatus, typeof maritalStatus);
// console.log(profile);// this line will throw error because we are using the variable before decalaration.
let profile='Developer';
console.log(profile);

//let,const and var
/*
1.let- if we want to change the value of that variable repeatedly we need to use let.It is blocked scoped.
2.const- If we don't want to change the value at all, then use const. if you are changing the value of the variable which is declared as const, we will get error.
3.var-old way of declaring variables prior to ES6.It is function scoped.
 */
//Basic Operators
/*
1.Mathematical operators
2.logical operators
3.assignment opeartors
4.comparison operators
 */
console.log(2*4, 10/3, 2**4, 10%3);//output - 8 3.3333333333333335 16 1
//String literals
console.log(`The person ${firstName}'s age is ${age}`);
//without string literals
console.log("The person "+firstName+"'s age is "+age );

//Type conversion and Coercion
/* Type Conversion is explicit conversion.
Coercion is implicit conversion.
*/
//Type Conversion
const inputYear='1991';
console.log(Number(inputYear),inputYear);//to convert to Number. But it will not change the type of original value.type of inputYear will be still string.

console.log(Number(inputYear)+18);//2009

console.log(Number('Mark'));//ouput will be NaN
const age1=24;
console.log(String(age1), typeof age1);//output will be '24' number

//type coercion
console.log('I am '+23+' years old');//here 23 is acting as string internally.using + numbers are converted to strings.
console.log('23'-10-'6');//here - converts strings to numbers. so output will be 7
console.log('23'/'2')//output will be 11.5
console.log(2+3+4+5+'5')//output will be 145 becauses 2+3+4+5=14+'5'=145

//Boolean conversion(Coercion)
//5 falsy values:0,'',undefined,null,NaN
//any String and number other than 0 are converted to true.
console.log(Boolean(0));//ouput will be false
console.log(Boolean(undefined));//output will be false
console.log(Boolean(''));//output will be false
console.log(Boolean(null));//output will be false

console.log(Boolean(1));//true
console.log(Boolean('abc'));//true
console.log(Boolean({}));//true
console.log(Boolean(-10));//true

if({})//as{} gives true due to Coercion it will execute the if block.
{
    console.log("this is true");
}
//equality operators
/* ==, ===
1.== checks only value
2.=== checks value and type of Data
*/ 
console.log('18'==18);//true
console.log('18'===18);//false

//with the help of prompt() function we can get input from the user in web page.It is by default String.

const favourite=prompt("what's you favourite number?");
console.log(typeof favourite);
if(favourite===23)
{
    console.log("favourite is of type Number");
}
else{
    console.log("favourite is of type string");
}
//switch
const day='monday';
switch(day)
{
    case 'monday':console.log('monday'); break;//strict comparison ===
    case 'tuesday':console.log('tuesday');break;
    default : console.log('nothing');
}
//JavaScript Engine- which executes javascript code.
//most popular engine used in browser is V8 Engine.
