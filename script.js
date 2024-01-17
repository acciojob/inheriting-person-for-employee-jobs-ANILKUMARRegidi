// complete this js code
function Person(name, age) {
	Person.prototype.greet(){
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old`);
	}
}

function Employee(name, age, jobTitle) {
	function Employee extends Person{
		Employee.prortotype.jobGreet()
		{
			console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}`);
		}
	}
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
