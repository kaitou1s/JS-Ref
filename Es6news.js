// Let and const

// Blocks and IIFE( immediately invoked function expression)
{
    const a = 1;
    let b = 2;
    var c = 3;
}

(function() {
    const x = 2;
})();
// console.log(x);
// Strings
// ES5
var firstName = 'Vu';
var lastName = 'Hoang';
var n = firstName + ' ' + lastName;
console.log(n);
// ES6
var name = `${firstName} ${lastName}`;
console.log(name);
//Lecture: Destructuring

// Array
var animal = ['dog', 'cat'];
// ES5
var d = animal[0];
var c = animal[1];
// ES6
var [d, c] = animal;
console.log(d);
console.log(c);
//Object
var obj = {
    firstName: 'Vu',
    lastName: 'Hoang'
};
var {
    firstName,
    lastName
} = obj;
console.log(firstName);
console.log(lastName);
/*
var {
    firstName: a,
    lastName: b
} = obj;
console.log(a);
console.log(b);
 */
//Function
function calcRetirement(yearOfBirth) {
    var age = new Date().getFullYear() - yearOfBirth;
    return [age, 65 - age];
}
var [age1, retirement] = calcRetirement(1999);
console.log(age1);
console.log(retirement);
// Map, reduce and filter
var arr = [1, 2, 3, 4, 5, 6];
var arr1 = arr.map(function(currentValue, index) {
    return currentValue * 2;
})
console.log(arr1);
var arr2 = arr.filter(function(currentValue, index) {
    return currentValue > 3;
})
console.log(arr2);
var sum = arr.reduce(function(accumulator, currentValue, index) {
    return accumulator + currentValue;
}, 0)
console.log(sum);
// Map()
var question = new Map();
question.set('title', 'What the name of the lasest version of JS?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES7');
question.set(4, 'ES8');
question.set('correct', '2');
question.set(true, 'Correct Answer!');
question.set(false, 'Wrong Answer!');
question.forEach((value, key) => {
    console.log(key);
})

// Classes and Sub classes
class Person {
    constructor(name, dateOfBirth, address, job) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.job = job;
    }
    calculateAge() {
        var age = new Date().getFullYear() - this.dateOfBirth;
        console.log(age);
    }
}
// const hoang = new Person('hoang', '1999', 'Ha Noi', 'Student');
// hoang.calculateAge();
// var a = Date(Date.now());
// console.log(a);
class Point extends Person {
    constructor(name, dateOfBirth, address, job, subject, point) {
        super(name, dateOfBirth, address, job);
        this.subject = subject;
        this.point = point;
    }
    grade() {
        this.point++;
        console.log(this.point);
    }
}
const point1 = new Point('hoang', '1999', 'Ha Noi', 'Student', 'math', 8);
point1.grade();

// Code Challenge
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
class Attribute {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}
class Park extends Attribute {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area;
        this.numTrees = numTrees;
    }
    treeDensity() {
        var density = this.numTrees / this.area;
        console.log(`This ${this.name} has a tree density of ${density} trees per square km.`);
    }
}
class Street extends Attribute {
    constructor(name, buildYear, length, size) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }
    streetClassify() {
        var classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }
}
const allParks = [new Park('Green Park', 1987, 0.2, 215),
    new Park('National Park', 1894, 2.9, 3541),
    new Park('Oak Park', 1953, 0.4, 949)
];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
    new Street('Evergreen Street', 2008, 2.7, 2),
    new Street('4th Street', 2015, 0.8),
    new Street('Sunset Boulevard', 1982, 2.5, 5)
];

function calcAverageAge(arr) {
    var sum = arr.reduce(function(accmulator, current, index) {
        return accmulator + current;
    });
    return [sum, sum / arr.length];
}

function reportParks(park) {
    console.log('-----PARK REPORT-----');
    // tree density
    park.forEach((current) => current.treeDensity());
    // average age
    var ages = park.map((current, index) => new Date().getFullYear() - current.buildYear);
    var [totalAge, averageAge] = calcAverageAge(ages);
    console.log(`Our ${park.length} parks have an average of ${averageAge} years.`);
    // more than 1000 trees
    var compare = park.filter((current) => current.numTrees > 1000);
    compare.forEach((current) => console.log(`${compare[0].name} has more than 1000 trees.`));

}

function reportStreets(street) {
    console.log('-----STREET REPORT-----');
    // total and average length;
    var ages = street.map((current, index) => current.length);
    var [totalLength, averageLength] = calcAverageAge(ages);
    console.log(`Our ${street.length} streets have a total length of ${totalLength} km, with an average of ${averageLength} km.`);
    // size
    street.forEach((current) => current.streetClassify())
}
reportParks(allParks);
reportStreets(allStreets);