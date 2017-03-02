$(document).ready(function(){
	
    $("#down-btn").click(function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1000);
    });
    
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.toTop').fadeIn();
		} else {
			$('.toTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.toTop').click(function(){
		$('html, body').animate({scrollTop : 0},700);
		return false;
	});
	
    $(function() {
        $("#map").googleMap();
        $("#map").addMarker({
          zoom: 11,
          coords: [43.841668, -79.398993], 
        });
    })
    
});
