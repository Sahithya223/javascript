'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
let arr=['a','b','c','d','e'];
//array methods
/*
1.slice-will return the new array from that position will not modify original array.
2.splice-will return the new array from that position will remove those extracted elements from the original array.
3.reverse-will return the new array with reverse order as well as it will modify original array.
4.concat-- will return the new array after adding the another array but it will not modify the original array.
*/
console.log(arr.slice(2));//will return all the elements from 2 nd index.
console.log(arr.slice(2,4));//will return the elements from index 2 to 3 will exclude 4.
console.log(arr.slice(-2));//will return last 2 elements.
console.log(arr.slice(1,-2));//will return the 2 elements from the last after one element.
console.log(...arr);

//splice
console.log(arr.splice(2));//will return all the elements from 2 nd index..
console.log(arr);//will remove all the extracted elements from the original array. output will be a,b.
//now arr contains only a,b.
console.log(arr.splice(-1));//will return the last element.
console.log(arr);//now it contains only a.

const arr1=[1,2,3,4,5,6,7,8,9,10]
//reverse
console.log(arr1.reverse());//will modify original array as well.
console.log(arr1);

const arr2=['a','b','c','d','e','f','g'];
//concat
console.log(arr1.concat(arr2));//will not modify the original array.
console.log(arr1);

//new at method 
console.log(arr1[0]); //output will be 10
console.log(arr1.at(0));//output will be 10
console.log(arr1.at(-1));//output will be 1.
console.log(arr1.at(-2));//output will be 2.


//looping arrays.
for(let i=0;i<arr1.length;i++)
{
  if(arr1.at(i)>5)
  {
    console.log(arr1.at(i));
  }
}
console.log('---for loop---')
for(let i of arr1)
{
   if(i>5)
   {
    console.log(i);
   }
}
console.log('---forEach---');
arr1.forEach(i=>{
  if(i>5)
  {
    console.log(i);
  }
})

//challenge#1
function checkDogs(dogsJulia,dogsKate)
{
  dogsJulia.splice(0,1);
  dogsJulia.splice(-2);
  const both=dogsJulia.concat(dogsKate);
  both.forEach((d,i)=>{
    if(d>=3)
    {
      console.log(`Dog number ${i+1} is an adult, and is ${d} years old`)
    }
    else{
      console.log(`Dog number ${i+1} is still a puppy 🐶`)
    }
  })
}
const julia=[3,5,2,12,7];
const kate=[4,1,15,8,3];
checkDogs(julia,kate);

//Map, filter and reduce.
//map will return new array will not modify original array.
console.log('---map---');
const array3=arr1.map(i=> i*3);
console.log(arr1);
console.log(array3);

//filter will return new array will not modify original array.
console.log('---filter---')
const array4=arr1.filter(i => i>3);
console.log(arr1);
console.log(array4);

//reduce
console.log('---reduce---')
const result=arr1.reduce((i1,i2)=>i1+i2);
console.log(result);

function calcAverageHumanAge(ages)
{
//  const humanAges=ages.map(age=>(
//   age<=2?age*2:16+age*4));
//  const adults=humanAges.filter(age=>age>=18);
//  console.log(adults);
//  const average=adults.reduce((acc,a) =>
//   acc+a,0)/adults.length;
 
//  console.log(average);

//using chaining
const avg=ages.map(age=>(age<=2?age*2:16+age*4)).filter(a=>a>=18).reduce((acc,a,i,arr)=>acc+a/arr.length,0)
console.log(avg);
}

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

//chaining methods
console.log('---chaining methods---');
const sum=arr1.filter(i=> i>5).map(i=>3*i).reduce((acc,i)=>acc+i,0);
console.log(sum);

//find method is same as filter method but will return only the first element based on the satisfied condition.
console.log('---find---');
const num=arr1.find(n=>n>4);//output will be 10 because this is first element which is satisfying the give condition.
console.log(num);

//some and every method
//both returs boolean value.
//by using some method , if any one element is satisfying the given condition then output will be true.
//by using every method, if all the elements satifies given condition then only it will be true.

//flat and flatMap
//flat method will flatten the nexted array. Array inside another array.
//flatMap-only one level can be flattend and will accept another function.

//challenge#4
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];
dogs.flatMap(d=>{
  d.recommendedFood=d.weight**0.75*28
});
console.log(dogs);
const sarahDog=dogs.find(d=>d.owners.find(o=>o==='Sarah'));
console.log(sarahDog);
const foodIntake=sarahDog.curFood > sarahDog.recommendedFood ?'Eating too much':'Eating too little';
console.log(foodIntake);
const ownersEatTooMuch=dogs.filter(d=>d.curFood>d.recommendedFood).flatMap(d=>d.owners);
console.log(ownersEatTooMuch);
const ownersEatTooLittle=dogs.filter(d=>d.curFood<d.recommendedFood).flatMap(d=>d.owners);
console.log(ownersEatTooLittle);

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dog's eat too little`);

const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));
console.log(dogs.filter(checkEatingOkay));

const dogsSorted=dogs.slice().sort((a,b)=>a.recommendedFood-b.recommendedFood);
console.log(dogsSorted);

//sorting
//sort method will sort in ascending order based on string values.
const owners=['sahithya','abc','parnapalli','shanvi'];
console.log(owners);
console.log(owners.sort());//output will be  ['abc', 'parnapalli', 'sahithya', 'shanvi']


const numArray=[10,-1,5,9,1,4,8];
console.log(...numArray)
console.log(numArray.sort());//output will be [-1, 1, 10, 4, 5, 8, 9]

console.log(numArray.sort((a,b)=>{
  if(a<b)
  {
    return -1;
  }
  else if(a>b)
  {
    return 1;
  }
  else if(a==b)
  {
    return 0;
  }
}))
//simplest code for numbers.
console.log(numArray.sort((a,b)=>b-a));//descending order.

