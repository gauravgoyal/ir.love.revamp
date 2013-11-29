(function ($) {
	$(document).ready(function(){
    set_heading_width();
		//alert('will be stickey');
		// stickey_header();
		var paneheight = $('div.pane-views-our-portfolio-block').height();
		var wheight = $(window).height();
		var logoheight = $('.l-branding').height();
		var topnavheight = $('.l-top-nav').height();
		// alert(topnavheight);
		$(window).scroll(function () {
			var top = $(window).scrollTop();
    		var div_top =  (wheight - logoheight) + topnavheight;
    		var services_top = div_top + paneheight;
/*
    		 if (top >= div_top) {// height of float header
    		 	$('.pane-views-our-portfolio-block .pane-title').addClass("header-stickey");
    		 }
    		 else {
    		 	$('.pane-views-our-portfolio-block .pane-title').removeClass("header-stickey");
    		 }

    		 if (top >= services_top) {// height of float header
    		 	$('.pane-views-our-services-services-content .pane-title').addClass("header-stickey");
                $('.pane-views-our-portfolio-block .pane-title').removeClass("header-stickey");
    		 }
    		 else {
    		 	$('.pane-views-our-services-services-content .pane-title').removeClass("header-stickey");
    		 }
*/
    	});


$(window).resize(function() {
  set_heading_width();
  $('.views-slideshow-cycle-main-frame').each(function(){
    var heightImgNow = '';
    $(this).find('.views-slideshow-cycle-main-frame-row').each(function(){
    //  var thisDisplay = $(this).prop("style").display;
      var thisDisplay = $(this).css('display');
      var thisImgHeight = $(this).find('img').height();
      if(thisDisplay == 'block') {
        heightImgNow = thisImgHeight;
      }
    });

    if(heightImgNow != '') {
       // set div height    = now image height.
       $(this).height(heightImgNow);
     }

  });

/*  change_font(); */ // change font only for desktop version
});


function set_heading_width() {
  var document_width = $(document).width();
  var character_space = 17;
  character_space = document_width > 769 ? 17 : 12;

  var heading_charater = $('.l-content h1').html().length;
  heading_charater = heading_charater * character_space;
  document_width = $(document).width();
  heading_charater = document_width > heading_charater ? heading_charater : document_width - 40;
  $('.l-content h1').css('width', heading_charater);
  if (document_width < 300) {
      $('.l-content h1').css('width', 'auto');
  }
}

/*
function change_font() {
  var window_width = $(window).width();
  if ( window_width > 755 ) { // below this width ,it will show tablet layout
    var window_ratio = window_width / 1000;
    window_ratio = window_ratio * 100;
    window_ratio = window_ratio > 100 ? 100 : window_ratio;
    window_ratio = window_ratio + "%";
    $('body').css('font-size', window_ratio );
    }
    else {
      window_ratio = 100 + "%";
      $('body').css('font-size', window_ratio );
    }
  }
*/
	});
}(jQuery));
