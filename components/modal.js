const modalDismiss = document.querySelectorAll('.modal-dismiss');
const type1 = document.querySelectorAll('.modal-btn');
const modal = document.querySelectorAll('.modal-box');

for (let i = 0; i < type1.length; i++) {
    type1[i].addEventListener('click', function () {
        event.preventDefault();
        modal[i].classList.add('show-modal');
    });
}
for (let i = 0; i < modalDismiss.length; i++) {
    modalDismiss[i].addEventListener('click', function () {
        console.log("pressed");
        event.preventDefault();
        modal[i].classList.remove('show-modal');
    });
}