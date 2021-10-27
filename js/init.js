
$(document).ready(function() {
    $('#services .owl-carousel').owlCarousel({
        responsive:{
            0: {
                items: 2
            },
            540:{
                items: 3
            },
            996:{
                items: 4
            },
            1100:{
                items: 6
            },
            1400:{
                items: 7
            }
        },
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: false,
        dots: false
    });
    
    $('.comments .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
    });
});

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
        $('#lang-wrapper').css({'display':'none'});
        $('#lang').css({'display':'none'});

        $('#menu-lang').addClass('active');
} else {
    // lang
    $('#lang-wrapper, #lang').on('click', function(e){
        e.preventDefault();

        $('#lang-wrapper').addClass('click');
        $('#lang').addClass('click');
        $('#menu-lang').addClass('active');

        localStorage.lang = 1;
    });    
}

// mobile menu
$('#nav-button').on('click',function(){
    $(this).toggleClass('active');
    $('#menu').toggleClass('active');
    $('#up').toggleClass('active');
    $('#lang').toggleClass('active');
});

// mobile phone
$('#phone-mobile').on('click', function(){

    $('#phone-mobile-content').toggleClass('active');
    $(this).toggleClass('active');
});

function gridCarousel() {
    if ($(window).width() < 776) {
       $('.partners .owl-carousel').owlCarousel({
            responsive:{
                0: {
                    items: 2
                },
                540:{
                    items: 3
                },
                776:{
                    items: 4
                }
            },
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true
       });
       $('.partners .owl-carousel').removeClass('grid-carousel');
    }else{
       $('.partners .owl-carousel').owlCarousel('destroy');
       $('.partners .owl-carousel').addClass('grid-carousel');
    }
 }
 
 $(document).ready(function(e) {
    gridCarousel();
 });
 
 $(window).resize(function() {
    gridCarousel();
 });

 // disabled animation

 if(localStorage.disabled === true){
    $('#logo').addClass('disabled');
 }

 if(localStorage.getItem('disabled')){
    
    $('#logo').addClass('disabled');
    $('#nav-button').addClass('disabled');
    $('#menu a').addClass('disabled');
    $('#phone').addClass('disabled');
    $('#phone-mobile').addClass('disabled');
    $('.search').addClass('disabled');
}

$('#menu a').on('click', function(){
    localStorage.setItem('disabled', 1);
});

$("#down a").click(function(e) {
    e.preventDefault();

    var next = $('#wiev-block');

    $('html, body').animate({ 
        scrollTop:next.offset().top - 120 + 'px'
    }, 'slow');

});


$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('#up').fadeIn();
    } else {
        $('#up').fadeOut();
}});

$('#up').click(function(e){
    e.preventDefault();
	$("html, body").animate({ 
        scrollTop: 0 
    }, 600);
	// return false;
});


$('.share-facebook').on('click',function(){window.open('https://facebook.com/sharer.php?display=popup&u='+window.location.href,'sharer','toolbar=0,status=0,resizable=1,width=626,height=436');return false});

$('.share-twitter').on('click', function(){window.open('https://twitter.com/intent/tweet?text='+document.title+' '+window.location.href,'twitter','toolbar=0,status=0,resizable=1,width=626,height=436');return false});

$('.share-linkedin').on('click',function(){window.open('https://linkedin.com/shareArticle?mini=true&url=' + window.location.href+'&title='+document.title,'linkedin','toolbar=0,status=0,resizable=1,width=626,height=436');return false});

$('.share-telegram').on('click',function(){window.open('https://telegram.me/share/url?url='+window.location.href+'&text='+document.title,'telegram','toolbar=0,status=0,resizable=1,width=626,height=436');return false});

$('.share-viber').on('click',function(){window.open('viber://forward?text='+document.title+' '+window.location.href,'viber','toolbar=0,status=0,resizable=1,width=626,height=436');return false});