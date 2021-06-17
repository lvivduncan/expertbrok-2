
/* 
// desktop menu
$('#menu .parent').on('mouseenter', function(){
    $(this).children('div').fadeIn();
});

$('#menu .parent').on('mouseleave', function(){
    $(this).children('div').fadeOut();
});
 */

// fixed menu
$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('#nav').addClass('fixed');
        $('#up').fadeIn();
        // $('#menu.active').addClass('top-60');
    }else{
        $('#nav').removeClass('fixed');
        $('#up').fadeOut();
        // $('#menu.active').removeClass('top-60');
    }
});

$('#up').on('click', function(e){
    e.preventDefault();
    $("html, body").animate({ 
        scrollTop: 0 }, 600);
	}
);

if(localStorage.lang == 1){
        $('#lang-wrapper').addClass('click');
        $('#lang').addClass('click');
} else {
    // lang
    $('#lang-wrapper, #lang').on('click', function(e){
        e.preventDefault();

        $('#lang-wrapper').addClass('click');
        $('#lang').addClass('click');

        localStorage.lang = 1;
    });    
}

// mobile menu
$('#nav-button').on('click',function(){
    $(this).toggleClass('active');
    $('#menu').toggleClass('active');
});




// test partners
$(document).ready(function() {
    if ( $(window).width() < 854 ) {
        startCarousel();
    } else {
        $('.partners .owl-carousel').addClass('off');
    }
});

$(window).resize(function() {
    if ( $(window).width() < 854 ) {
        startCarousel();
    } else {
        stopCarousel();
    }
});

function startCarousel(){
    $(".partners .owl-carousel").owlCarousel({
        navigation : true, // Show next and prev buttons
        slideSpeed : 500,
        margin:10,
        paginationSpeed : 400,
        autoplay:true,
        items : 1,
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false,
        loop:true,
        nav:true,
        navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"]
    });
}

function stopCarousel() {
    var owl = $('.partners .owl-carousel');
    owl.trigger('destroy.owl.carousel');
    owl.addClass('off');
}