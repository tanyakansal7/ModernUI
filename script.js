const btn = document.querySelector('.hamburger__button');
const bg = document.querySelector('.hamburger__background');
const nav = document.querySelector('.hamburger__nav');
btn.addEventListener('click', () => {
	bg.classList.toggle('hamburger__background--active');
	nav.classList.toggle('hamburger__nav--active');
});

var doc, bod, htm;
var a = document.querySelector('.doc-sidebar');
var b = getComputedStyle(a);
if(b.display == 'none'){
	console.log('activated');
	addEventListener('load', function(){
		doc = document; bod = doc.body; htm = doc.documentElement;
		addEventListener('scroll', toggleScroll);
	  });
}

window.addEventListener("resize", () => {
	var w = window.innerWidth;
	// console.log(w);
	if(w>=821){
		// console.log("i if called");
		

			document.querySelector('.hamburger-nav').style.display =  'none';
			
		removeEventListener('scroll', toggleScroll);
		doc.querySelector('.navigation').style.display = 'flex';

	}else{
		// console.log("i else called");
		document.querySelector('.hamburger-nav').style.display =  'block';

		doc = document; bod = doc.body; htm = doc.documentElement;
		addEventListener('scroll',toggleScroll);
	}
});
function toggleScroll(){
	// console.log("first");
  doc.querySelector('.navigation').style.display = htm.scrollTop > 180 ? 'none' : 'flex';
  doc.querySelector('.hamburger__button').style.borderRadius = htm.scrollTop > 180 ? '50%' : '0';
//   doc.querySelector('.hamburger__button').style.backgroundColor = htm.scrollTop > 180 ? 'var(--color-primary)' : 'var(--color-grey-light-1)';
  doc.querySelector('.hamburger__button').style.transform = htm.scrollTop > 180 ? 'translate(-3rem, 3rem)' : 'translate(0rem)';
//   doc.querySelector('.hamburger__background').style.transform = htm.scrollTop > 180 ? 'translate(-3rem, 3rem)' : 'translate(0rem)';
}