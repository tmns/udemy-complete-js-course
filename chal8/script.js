// let and const

/*
// ES5

var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6

const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller'; // returns Uncaught TypeError Assignment to Const Var
console.log(name6);
*/

// ES5
/*
function driversLicense5(passedTest) {
    if (passedTest) {
        console.log(firstName);
        var firstName = 'John';
        var yearOfBirth = '1992';
    }
    console.log(firstName + ' born in ' + yearOfBirth + ' can now legally drive.');
}

driversLicense5(true);

// ES6

function driversLicense6(passedTest) {
    console.log(firstName);
    let firstName;
    const yearOfBirth = '1992';
    if (passedTest) {
        firstName = 'John';
    }
    console.log(firstName + ' born in ' + yearOfBirth + ' can now legally drive.');

}

driversLicense6(true);
*/

/*
let i = 23;
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);
*/

// Blocks and IIFEs
/*
// ES5
(function() {
    var a = 1;
    var b = 2;
})();

// ES6
{
    const a = 1;
    let b = 2;
}

console.log(a + b);
*/

// Strings
/*
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1992;

function calcAge(year) {
    return 2019 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6 (template literal)
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J')); //true
console.log(n.endsWith('ti')); //false
console.log(n.includes(' ')); //true
console.log(firstName.repeat(5)); //JohnJohnJohnJohnJohn
console.log(`${firstName} `.repeat(5)); //John John John John John
*/

// Arrow Functions
/*
const years = [1990, 1992, 1994, 1983, 1945];

// ES5
var ages5 = years.map(function(el) { //el = current element
    return 2019 - el;
});
console.log(ages5);

// ES6
let ages6 = years.map(el => 2019 - el);
console.log(ages6);

ages6 = years.map((el, i) => `Age element ${i + 1}: ${2019 - el}.`);
console.log(ages6);

ages6 = years.map((el, i) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${i + 1}: ${age}.`;
});
console.log(ages6);
*/

// Arrow functions 2
/*
// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        var self = this;
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}
//box5.clickMe();

//ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', () =>  {
            var str = `This is box number ${this.position} and it is ${this.color}`;
            alert(str);
        });
    }
}
box6.clickMe();
*/
/*
function Person(name) {
    this.name = name;
}

// ES5
Person.prototype.myFriends5 = function(friends) {
    
    var arr = friends.map(function(el) {
        return this.name + ' is friends with ' + el;
    }.bind(this));

    console.log(arr);
}

var friends = ['bob', 'jane', 'mark'];
new Person('john').myFriends5(friends);

// ES6
Person.prototype.myFriends6 = function(friends) {
    
    var arr = friends.map(el => `${this.name} is friends with ${el}`);

    console.log(arr);
}
new Person('mike').myFriends6(friends);
*/

// Destructuring
/*
// ES5
var john = ['John', 26];
//var name = john[0];
//var age = john[1];

// ES6
const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
    firstName: 'John',
    lastName: 'Smith',
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

function calcAgeRetirement(year) {
    const age2 = new Date().getFullYear() - year;
    return [age2, 65 - age2];
}

const [age2, retirment] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirment);
*/

// Arrays
/*
const boxes = document.querySelectorAll('.box');

// ES5
var boxesArr5 = Array.prototype.slice.call(boxes); // hack to change from nodelist to array
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
});


// ES6
const boxesArr6 = Array.from(boxes); // change nodelist to array
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

/*
// ES5
for (var i = 0; i < boxesArr5.length; i++) {

    if (boxesArr5[i].className === 'box blue') {
        continue;
    } 
    boxesArr5[i].textContent = 'I changed to blue!';
}
*/
/*
// ES6
for (const cur of boxesArr6) {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue!';
}

// ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {
    return cur >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6 -- findIndex & find
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
*/
/*
// Spread Operator
function addFourAges(a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ['john', 'jane', 'mark'];
const familyMiller = ['mary', 'bob', 'ann'];
const bigFamily = [...familySmith, 'lily', ...familyMiller];
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');
*/

// Rest Parameters
/*
// ES5
function isFullAge5() {
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);
    argsArr.forEach(function(cur) {
        console.log((2019 - cur) >= 18);
    });
}

//isFullAge5(1990, 2009, 1932);

// ES6
function isFullAge6(...years) {
    years.forEach(cur => console.log((2019 - cur) >= 18));
}

isFullAge6(1990, 2009, 1932);
*/
/*
// ES5
function isFullAge5(limit) {
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments, 1);
    argsArr.forEach(function(cur) {
        console.log((2019 - cur) >= limit);
    });
}

//isFullAge5(21, 1990, 2009, 1932);

// ES6
function isFullAge6(limit, ...years) {
    years.forEach(cur => console.log((2019 - cur) >= limit));
}

isFullAge6(21, 1990, 2009, 1932);
*/

// Default Paramaters
/*
// ES5
function SmithPerson(firstName, lastName, yearOfBirth, nationality) {
    yearOfBirth === undefined ? yearOfBirth = 1990 : yearOfBirth = yearOfBirth;
    nationality === undefined ? nationality = 'USA' : nationality = nationality;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('john', 'smith');
var emily = new SmithPerson('emily', 'smith', 1922, 'spanish');
*/
// ES6
/*
function SmithPerson(firstName, lastName, yearOfBirth = 1990, nationality = 'USA') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}
var john = new SmithPerson('john', 'smith');
var emily = new SmithPerson('emily', 'smith', 1922, 'spanish');
*/

// Maps
/*
const question =  new Map();
question.set('question', 'what is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong :/ please try again!');

console.log(question.get('question'));
//console.log(question.size);

//if (question.has(4)) {
//    question.delete(4);
//}

//question.clear();

//question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);   
    }
}

const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));
*/

// Classes
/*
// ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');

// ES6
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    static greeting() {
        console.log('Hey there!');
    }
}

const john6 = new Person6('John', 1990, 'teacher');

Person6.greeting();
*/

// Classes with Subclasses

// ES5
/*
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}

var johnAthlete5 = new Athlete5('john', 1990, 'runner', '5', '3');

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();

// ES6
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        const age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }    
}

class Athlete6 extends Person6 {
    constructor (name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6('john', 1990, 'runner', 3);
johnAthlete6.calculateAge();
johnAthlete6.wonMedal();
*/

// Coding Challenge

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

class TownItem {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends TownItem {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area;
        this.numTrees = numTrees;
    }

    calculateAge() {
        const age = new Date().getFullYear() - this.buildYear;
        return age;
    }

    calculateDensity() {
        const density = this.numTrees / this.area;
        console.log(`Park ${this.name} has density ${density}`);
    }

}

class Street extends TownItem {
    constructor(name, buildYear, length, size = 2) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(0, 'tiny');
        classification.set(1, 'small');
        classification.set(2, 'normal');
        classification.set(3, 'big');
        classification.set(4, 'huge');
        console.log(`Street with name ${this.name} has the size classification ${classification.get(this.size)}`);
    }
}

const parks = [new Park('Park1', 1920, 43, 654), new Park('Park2', 1934, 78, 302), new Park('Park3', 1910, 95, 1010)];

const streets = [new Street('Street1', 1911, 152, 3), new Street('Street2', 1908, 32, 0), new Street('Street3', 1954, 60, 1), new Street('Street4', 1965, 110)];

function calcAvg(arr) {
    const sum = arr.reduce((prev, cur, i) => prev + cur, 0);
    return [sum, sum / arr.length];
}

function reportParkData(p) {
    console.log('Data for Parks...');

    console.log('Density for each park...');
    p.forEach(cur => cur.calculateDensity());

    console.log('Average age of all parks...');
    const ages = p.map(cur => cur.calculateAge());
    const [sum, avg] = calcAvg(ages);
    console.log(avg);

    console.log('Park with over 1000 trees...')
    console.log(p[p.map(cur => cur.numTrees).findIndex(cur => cur >= 1000)]);
}

function reportStreetData(s) {
    console.log('Data for Streets');

    console.log('Total and average length of streets...');
    const lengths = s.map(cur => cur.length);
    const [total, avg] = calcAvg(lengths);
    console.log(`Total: ${total}. Average: ${avg}.`);

    console.log('Size classification of all streets...');
    console.log(s.forEach(cur => cur.classifyStreet()));
}

reportParkData(parks);
reportStreetData(streets);