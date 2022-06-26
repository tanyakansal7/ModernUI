const snackbars = document.querySelectorAll('.snackbar');
const toasts = document.querySelectorAll('.toast-box');
const btns = document.querySelectorAll('.snack-toggle');
const toastBtn = document.querySelectorAll('.toast-toggle');
const cross = document.querySelectorAll('.snackbar-icon');
for (let i = 0; i < btns.length; i++) {
	
	btns[i].addEventListener('click', () => {
		console.log('pressed');
		snackbars[i].classList.remove('invisible');

		setTimeout(() => {
			snackbars[i].classList.add('invisible');
		}, 5000);
	});
	cross[i].addEventListener('click', () => {
		snackbars[i].classList.add('invisible');
	});
}
for (let i = 0; i < toastBtn.length; i++) {
	
	toastBtn[i].addEventListener('click', () => {
		console.log('pressed');
		toasts[i].classList.remove('invisible');

		setTimeout(() => {
			toasts[i].classList.add('invisible');
		}, 5000);
	});
	cross[i].addEventListener('click', () => {
		toasts[i].classList.add('invisible');
	});
}