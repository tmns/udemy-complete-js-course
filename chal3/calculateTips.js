function calculateTip(bill) {
	if (bill < 50) return bill * .2;
	if (bill > 50 && bill < 200) return bill * .15;
	if (bill > 200) return bill * .1;
}

var bills = [124, 48, 268];

var tips = [calculateTip(bills[0]), 
			calculateTip(bills[1]), 
			calculateTip(bills[2])];
var totals = [bills[0] + tips[0], 
              bills[1] + tips[1], 
              bills[2] + tips[2]];

console.log('Tips: ' + tips + '\nTotals: ' + totals);