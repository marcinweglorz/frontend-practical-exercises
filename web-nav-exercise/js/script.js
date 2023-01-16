const burgerBtn = document.querySelector('.hamburger')
const navActive = document.querySelector('.nav-list')

const handleClick = () => {
	burgerBtn.classList.toggle('hamburger--active')
	navActive.classList.toggle('nav-list--active')
}

burgerBtn.addEventListener('click', handleClick)
