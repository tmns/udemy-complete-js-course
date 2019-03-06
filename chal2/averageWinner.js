var averageJohn = (89 + 120 + 103) / 3;
var averageMike = (119 + 94 + 123) / 3;
var averageMary = (97 + 134 + 105) / 3;

if (averageMike > averageJohn && averageMike > averageMary) {
	console.log('Winner is Mike with average score ' + averageMike);
} else if (averageMary > averageJohn && averageMary > averageMike) {
	console.log('Winner is Mary with average score ' + averageMary);

} else if (averageJohn > averageMike && averageMike > averageMary) {
	var averageWinner = averageJohn;
	console.log('Winner is John with average score ' + averageJohn);
} else {
	console.log('There is a tie!');
}

