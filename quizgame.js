var Question = function(title, answers, correctAnswers) {
    this.title = title;
    this.answers = answers;
    this.correctAnswers = correctAnswers;
}
var q1 = new Question('Hoang co dep trai khong?', ['Yes', 'No'], 0);
var q2 = new Question('Hoang hoc dai hoc nao?', ['SOL', 'UET', 'ULIS'], 1);
var q3 = new Question('Hoang co may nguoi yeu cu roi?', ['Mot', 'Hai', 'Ba', 'Khong'], 4);
var arrQuestion = [q1, q2, q3];
var question = arrQuestion[Math.floor(Math.random() * arrQuestion.length)];
console.log(question)

function randomQuestion(arr, callback) {
    console.log(question.title);
    for (el in question.answers) {
        console.log(el + ':  ' + question.answers[el]);
    }
    callback();
    console.log(question.correctAnswers)

}

function checkAnswer() {
    var userAnswer = prompt("Please enter your answer! ");
    console.log(userAnswer);
    if (userAnswer == question.correctAnswers) {
        console.log('Correct!');
    } else {
        console.log('Wrong answer!')
    }

}
randomQuestion(arrQuestion, checkAnswer);