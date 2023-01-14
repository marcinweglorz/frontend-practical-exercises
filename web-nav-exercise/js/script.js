const mobileNav = document.querySelector('.navigation-list')
const burgerBtn = document.querySelector('.burger')

burgerBtn.addEventListener('click', function () {
	mobileNav.classList.toggle('active')
})
