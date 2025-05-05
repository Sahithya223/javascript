'use strict';
const bookings = [];
const createBooking = function (flight, numOfPassengers) {
    const booking = {
        flight,
        numOfPassengers,
        price: 199 * numOfPassengers
    }
    bookings.push(booking);
    console.log(booking);
}
createBooking('ABC13', 10);


const flight = 'fgh134';
const person = {
    name: 'Sahithya',
    passportNumber: 123456789
}
const checkin = function (flightNumber, person) {
    flightNumber = '134999',
        person.name = 'Miss.' + ' ' + person.name;

    if (person.passportNumber == 123456789) {
        alert('check in');
    }
    else {
        alert('wrong passport');
    }
}
checkin(flight, person);
console.log(flight);
console.log(person);

const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
}
console.log(oneWord('My name is SAHITHYA'));
const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

//Higher-order functions(i.e functions accepting other functions)
const higherOrder = function (str, fn) {
    console.log(fn.name);//will provide the function name.
    console.log(str);
    console.log(fn(str));
}
higherOrder('my name is sahithya', upperFirstWord);
higherOrder('I am learning JAVASCRIPT', oneWord);

//functions returing other functions
const greet = function (greeting) {
    return function (name) {
        console.log(greeting + ' ' + name);
    }
}
const greeter = greet('Hi');
greeter('Sahithya');

greet('Hello')('ABCD');

const greet1 = (greeting) => {
    return (name) => {
        console.log(greeting + ' ' + name);
    }
}
greet1('Hey')('Sandy');


//Call and Apply methods.
//use to manually set this value.

const air = {
    flightName: 'Air India',
    IALTA: 'AR',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.flightName} flight ${this.IALTA}${flightNum}`)
        this.bookings.push({ flight: `${this.IALTA} ${this.flightName}`, name })
    }
}
air.book(338, 'Parnapalli Sahithya');
console.log(air);

const indi = {
    flightName: 'INDIGO',
    IALTA: 'INDI',
    bookings: [],
    //instead of write again book function, we can use call and apply methods as shown below.
    //call method first argument will be the object and remaing will be parameters of that funcion.
    //apply method firsy argument will be the object and other will be the array.
}
const book = air.book;
book.call(indi, 590, 'Paranapalli Renuka');
console.log(indi);

const swiss = {
    flightName: 'SWISS Airlines',
    IALTA: 'SWI',
    bookings: [],
}
const swissData = [490, 'Parnapalli Shanvi'];
book.apply(swiss, swissData);

book.call(swiss, 39, 'shanvi');

console.log(swiss);

//bind method
//it will not instantly call the method in turn return the new function where this keyword is bound.
//instead of using call method multiple times , we can use bind method.
const bookAir = book.bind(air);
const bookIndi = book.bind(indi);
const bookSwiss = book.bind(swiss);
//we can use above variables for multiple booking based on the airline name.

bookAir(43, 'sreenath');
bookAir(53, 'Ramesh');
console.log(air);

bookIndi(32, 'sreenath');
bookIndi(52, 'Ramesh');
console.log(indi);

bookSwiss(22, 'sahithya');
bookSwiss(33, 'shanvi');
console.log(swiss);

const poll = {
    question: `What is your favourite programming language?`,
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section 😃
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(write option number)`));
        if (typeof answer === 'number' && answer < this.answers.length) {
            this.answers[answer]++;
            console.log(this.answers);
        }
      this.displayResults();
      this.displayResults('string');
    },
    displayResults(type = 'array') {
        if (type === 'array') {
            console.log(this.answers)
        }
        else if (type === 'string') {
            console.log(`poll results are ${this.answers.join(', ')}`);
        }

    }
}
// poll.registerNewAnswer();
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));


//Immediately invoked function expressions(IIFE)
//calling once but immediately

(function()
{
    console.log('ths will never run again');
})();

//closures
