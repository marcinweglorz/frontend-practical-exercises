const btn1 = document.querySelector('.btn-1')
const btn2 = document.querySelector('.btn-2')
const btn3 = document.querySelector('.btn-3')
const p = document.querySelector('p')

function Food(name, price) {
	this.name = name
	this.price = price
}

const meal = new Food('Schabowy, 29')
const meal2 = new Food('Pizza, 37')
const meal3 = new Food('Pierogi, 15')

Food.prototype.showInfo = function () {
	console.log(`${this.name} kosztuję ${this.price}zł.`)
}

btn1.addEventListener('click', () => meal.showInfo())
btn2.addEventListener('click', () => meal2.showInfo())
btn3.addEventListener('click', () => meal3.showInfo())
