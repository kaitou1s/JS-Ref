//Closures Sample
function getRetirementAge(retirementAge) {
    var a = ' years until left retirement.';
    return function getRetire(yearOfBirth) {
        var age = 2020 - yearOfBirth;
        console.log(retirementAge - age + a);
    }
}
var retirementVN = getRetirementAge(65);
retirementVN(1990)
    // function interviewQuestion(job) {
    //     if (job === 'designer') {
    //         return function(name) {
    //             console.log(name + ', ' + 'Oh! You are a designer');
    //         }
    //     }
    //     if (job === 'developer') {
    //         return function(name) {
    //             console.log(name + ', ' + 'Nice! We got a Developer');
    //         }
    //     } else {
    //         return function(name) {
    //             console.log(name + ', ' + 'What do you do?')
    //         }
    //     }
    // }
    // Closures:Rewrite this interviewQuestion() with powerful of closures
function interviewQuestion(job) {
    return function(name) {
        if (job === 'desinger') {
            console.log(name + ', ' + 'Oh! You are a designer');
        } else if (job === 'developer') {
            console.log(name + ', ' + 'Nice! We got a Developer')
        } else {
            console.log(name + ', ' + 'What do you do?')
        }
    }
}
var desingerQuestion = interviewQuestion('desinger')
desingerQuestion('Hoang');