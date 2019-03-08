var john = {
	fullName: 'John Smith',
	bills: [124, 48, 268, 180, 42],
	calcTips: function() {
		this.tips = [];
		this.totals = [];

		for (var i = 0; i < this.bills.length; i++) {
			var percentage;
			var bill = this.bills[i];
			if (bill < 50) {
				percentage = .2;
			} else if (bill >= 50 && bill < 200) {
				percentage = .15;
			} else { 
				percentage = .10;
			}
			this.tips[i] = bill * percentage;
			this.totals[i] = bill + this.tips[i];
		}
	}
}

var mark = {
	fullName: 'Mark Widlerbeaver',
	bills: [82, 456, 321, 160, 51],
	calcTips: function() {
		this.tips = [];
		this.totals = [];

		for (var i = 0; i < this.bills.length; i++) {
			var percentage;
			var bill = this.bills[i];
			if (bill < 100) {
				percentage = .2;
			} else if (bill >= 100 && bill < 300) {
				percentage = .1;
			} else { 
				percentage = .25;
			}
			this.tips[i] = bill * percentage;
			this.totals[i] = bill + this.tips[i];
		}
	}
}

function calcAverage(tips) {
	var sum = 0;
	for (var i = 0; i < tips.length; i++) {
		sum += tips[i];
	}
	return sum / tips.length;
}

john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
	console.log(john.fullName + '\'s family paid higher tips with the average ' + john.average);
} else if (mark.average > john.average) {
	console.log(mark.fullName + '\'s family paid higher tips with the average ' + mark.average);
} else {
	console.log('They paid the same average of tips!');
}

