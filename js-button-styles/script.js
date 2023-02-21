const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const p1 = document.querySelector('.p1')
const p2 = document.querySelector('.p2')
const square = document.querySelector('.square')

const fun = () => {
	console.log('Hello World!')
}

const fun1 = () => {
	square.style.background = 'tomato'
}

const fun2 = () => {
	square.style.background = 'blue'
}

const fun3 = () => {
	p1.classList.toggle('show')
	p2.classList.toggle('show')
}

btn1.addEventListener('dblclick', fun)
square.addEventListener('mouseenter', fun1)
square.addEventListener('mouseleave', fun2)
btn2.addEventListener('click', fun3)
