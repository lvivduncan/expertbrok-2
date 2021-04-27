
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
})