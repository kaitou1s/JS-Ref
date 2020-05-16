var Animal = function(breed, age, price) {
    this.breed = breed;
    this.age = age;
    this.price = price;
}
Animal.prototype.sumTotalPrice = function() {
    console.log(this.age + this.price * 2);
}
var mic = new Animal('dog', 1, 1000);
mic.sumTotalPrice();
// Passing function with an argument -- callback function
var years = [1990, 1992, 2001, 2000, 1923];


function arrCalc(arr, callback) {
    var temp = [];
    for (let i = 0; i < arr.length; i++) {
        temp.push(callback(arr[i]));
    }
    return temp;
}

function calculateAge(num) {
    return 2020 - num;
}
var ages = arrCalc(years, calculateAge);
console.log(ages)
    //Higher Order Function
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', ' + 'Oh! You are a designer');
        }
    }
    if (job === 'developer') {
        return function(name) {
            console.log(name + ', ' + 'Nice! We got a Developer');
        }
    } else {
        return function(name) {
            console.log(name + ', ' + 'What do you do?')
        }
    }
}
var developerQuestion = interviewQuestion('developer');
developerQuestion('Hoang');
interviewQuestion('designer')('Vu')

//