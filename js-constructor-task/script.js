function Person(name, age) {
	this.name = name
	this.age = age
}

Person.prototype.sayHi = function () {
	console.log(`Cześć, jestem ${this.name}.`)
}

Person.prototype.showAge = function () {
	console.log(`Mam ${this.age} lat.`)
}

const person1 = new Person('Marcin', 27)
person1.sayHi()
person1.showAge()

// ====================

class Person2 {
	constructor(name, age) {
		this.name = name
		this.age = age
	}

	sayHi() {
		console.log(`Cześć, jestem ${this.name}!`)
	}

	showAge() {
		console.log(`Mam ${this.age} lat!`)
	}
}

const person2 = new Person2('Marcin', 27)
console.log(person2)
