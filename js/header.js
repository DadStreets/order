const burger = document.querySelector('.burger'),
	  close = document.querySelector('.navbar__item.mobile .fa-times-circle')
	  navMenu = document.querySelector('.navbar');

burger.addEventListener('click', () => {
	navMenu.classList.toggle('active');
	document.body.classList.toggle('fixed');
})

close.addEventListener('click', () => {
	navMenu.classList.toggle('active');
	document.body.classList.toggle('fixed');
})