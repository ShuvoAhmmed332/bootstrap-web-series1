    // Counter plugin:
			 $(document).ready(function($) {
        $('.count-number').counterUp({
            delay: 10,
            time: 10000
        });
 });
  // top to button plugin:

$(document).ready(function(){

/*--- upper button---*/

$(window).scroll(function(){


var x = $(window).scrollTop();

if (x>1000) {
  $('#upper').fadeIn(1000);

}else{
 
   $('#upper').fadeOut(1000);

}

})

$('#upper').click(function(){

$('html').animate({scrollTop: 0},2000);

});


});

// smooth scrool:
    $(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (300) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

$('#logocarousel').owlCarousel({
   		items:5,
		loop:true,
		margin:4,
		autoplay:true,
		autoplayTimeout:1500,
		responsiveClass:true,
		responsive:{
			0:{
			items:2,
			},
			576:{
			items:3,
			},
			768:{
			items:4,
			},
			1000:{
			items:5,
			},
			1300:{
			items:6,
			dots:true,
			}
		}
	})
	
	
	
	
	


	// wow plugin:
    wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
    document.getElementById('moar').onclick = function() {
      var section = document.createElement('section');
      section.className = 'section--purple wow fadeInDown';
      this.parentNode.insertBefore(section, this);
    };
