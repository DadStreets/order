const switches = document.querySelectorAll('.promotion-answers-card__title');

for (i = 0; i < switches.length; i++) {
	switches[i].addEventListener('click', function(e) {
		this.querySelector('.promotion-answers__status').classList.toggle('active');
		let panel = this.nextElementSibling;

		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}