var mark = {
	fullName:'Mark Smith',
	mass: 83,
	height: 1.81,
	calcBMI: function() {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	}
}

var john = {
	fullName: 'John Doodly',
	mass: 91,
	height: 1.72,
	calcBMI: function() {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	}	
}

if (mark.calcBMI() > john.calcBMI()) {
	console.log(mark.fullName + ' has the higher BMI with ' + mark.bmi);
} else if (john.bmi > mark.bmi) {
	console.log(john.fullName + ' has the higher BMI with ' + john.bmi);
} else {
	console.log('John and Mark have the same BMI!');
}

