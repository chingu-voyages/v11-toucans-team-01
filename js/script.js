$(document).ready(function() {
    // solid nav background on scroll
    $(window).scroll(function() {
        if($(window).scrollTop() > 600) {
            $('.nav').addClass('solid');
        } else {
            $('.nav').removeClass('solid');
        }
    });
})