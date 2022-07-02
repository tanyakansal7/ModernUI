const hambtn = document.querySelector('.hamburger__button');
const hamlist = document.querySelector('.hamburger__list');
const hamnav = document.querySelector('.hamburger__nav'); 
const hamnbg = document.querySelector('.hamburger__background'); 
const hamitems = document.querySelectorAll('.hamburger__item');
hambtn.addEventListener('click', () => {
    hamlist.classList.toggle('invisible');

})
for( let i = 0; i < hamitems.length; i++ ){
    hamitems[i].addEventListener('click', () => {
        hamlist.classList.toggle('invisible');
        hamnav.classList.toggle('hamburger__nav--active');
        hamnbg.classList.toggle('hamburger__background--active');
    })
}