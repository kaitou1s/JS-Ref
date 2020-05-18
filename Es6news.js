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
question.set('title', 'Hoang co may nguoi yeu roi?');
console.log(question.get('title'));