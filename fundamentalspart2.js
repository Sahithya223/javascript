//activating Strict mode
'use strict';//this line should be in the first line of the each script to enable strict mode.

//function declaration
/*syntax function function_name()
{
//code
}
//calling the function 
//function_name();
*/
function logger() {
    console.log('my name is sahithya');

}
logger();
//functions with parameters and return type
function addTwoNumbers(a, b) {
    return a + b;
}
const result = addTwoNumbers(10, 20);
console.log(result);

//function expression
const sumOfTwoNumbers = function (a, b) {
    return a + b;
}
const sum = sumOfTwoNumbers(30, 100);
console.log(sum);
//using function declaration we call that function befor declaration where as in function expression if we are calling that before declaration we will get error.

//arrow function. No this keyword.
const text = fullName => fullName;
console.log(text('sahithya'));

const addition = (a, b) => {
    console.log(`sum of 2 numbers is ${a + b}`);
    return a + b;
}
const result1 = addition(1, 100);
console.log(result1);

//Function calling another function
function averageOfTwoNumbers(a, b) {
    const sum1 = sumOfTwoNumbers(a, b);
    return sum1 / 2;
}
const average = averageOfTwoNumbers(105, 100);
console.log(`average of 105 and 100 numbers is ${average}`);

//Arrays
/* 
indexing always start with 0
Syntax to create an Array
1.const array_name=[value1,value2,....]
2.const array_name=new Array(value1,value2,...);
*/
const friends = ['Teja', 'Vishnu', 'ABC'];
const nums = new Array(1, 2, 3, 10, 9);
console.log(nums[0]);//will give the element at 0 index
friends[2] = 'Megh';//friends is declared as const but still we are able to modify the elements of an array becoz array is non primitive data type.
// friends=['abc','efg'];//this will throw an error becoz, we are completely modifing the entire array.
console.log(friends);
const details = ['abc', 29, 'Hyderabad'];
console.log(details);
//methods in Array
/*
1.length- gives the size of an array
2.push(value)-adds element at the end of an array and returns the length of an array.
3.unshift(value)-adds element at start of the array and returns the array length
4.pop()-will remove the last element of the array.will return the element which is going to be removed.
5.shift()-will remove the first element from the array.
6.indexOf(value)-will return the index of that value in an array.If that value is not present in array will give -1.
7.includes(value)-will return true if it is present in an array else false.Will check with strictly equality operator.
8.
*/
console.log("length of nums is " + nums.length);
console.log(nums.push(11));
console.log(nums);
nums.unshift(0);
console.log(nums);
console.log(nums.pop());
console.log(nums.shift());
console.log(nums.indexOf(3), nums.indexOf(11));
console.log(nums.includes(3), nums.includes(11));

//objects
const student = {
    name: 'Shanvi',
    age: 4,
    class: 'UKG',
    friends: ['vishruth', 'ruthrashtra']
}
console.log(student);
//accessing object properties using . , [] annotation
console.log(student.name, student['age']);
console.log(student['friends']);
//if you are accessing the object with property which is not present in objects we will get output as undefined
console.log(student.weight);//output will be undefined
//adding properties
student.weight = 18;
student['location'] = 'Hyderabad';
console.log(student);
//object methods
/* in objects properties are nothing but key value pairs.keys can be functions as well
1.
*/
/*Write your code below. Good luck! 🙂 */
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}
const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}
if (john.calcBMI() > mark.calcBMI()) {
    console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})`);
}
else {
    console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})`);
}

//loops
/*
1.for loop
2.while loop
 */
//for loop
for (let i = 1; i <= 3; i++) {
    console.log(i);
}
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}
//while
console.log("using while loop");
let i = 0;
while (i >= 0 && i < nums.length) {
    console.log(nums[i]);
    i++;
}
console.log(typeof nums);
console.log(typeof nums === 'object');
const data = [17, 21, 23];
const printForecast = function (temperatures) {
    let stringMsg = '';
    for (let i = 0; i < temperatures.length; i++) {
        stringMsg = stringMsg + `... ${temperatures[i]} in ${i + 1} days `
    }
    console.log(stringMsg);
}
printForecast(data);