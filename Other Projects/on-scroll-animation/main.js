// GLOBAL VARS
var ticking = false;
var lastScrollTop = 0;


// EVENTS
window.addEventListener("wheel", scrollCallback);
window.addEventListener("scroll", scrollCallback);


// SCROLL CALLBACK
function scrollCallback(e) {
	if(!ticking) {
		requestAnimationFrame(update);
	}
	ticking = true;
}


// UPDATE
function update() {
	
	// RESET TICK TO FALSE
	ticking = false;
	
	// GET CURRENT SCROLL POSITION
	var st = window.pageYOffset || document.documentElement.scrollTop;
	
   if (st > lastScrollTop){
      // DOWN SCROLL
		$('.js-logo').addClass('is-small');
   } else if(st < lastScrollTop) {
      // UP SCROLL
		$('.js-logo').removeClass('is-small');
   }
	
	// SAVE CURRENT SCROLLTOP
   lastScrollTop = st;

}
