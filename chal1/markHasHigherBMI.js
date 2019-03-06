var heightMark = 1.82;
var massMark = 80;

var heightJohn = 1.61;
var massJohn = 93;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

var markHigherBMI = BMIMark > BMIJohn;

console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI); 