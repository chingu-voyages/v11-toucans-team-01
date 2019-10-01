$(document).ready(function() {
    // solid nav background on scroll
    $(window).scroll(function() {
        if($(window).scrollTop() > 600) {
            $('.nav').addClass('solid');
        } else {
            $('.nav').removeClass('solid');
        }
    });

    // tabbed content section
    let tabs = document.querySelectorAll('.title');
    let panels = document.getElementsByClassName('panel');

    // Add or remove active class on click (need to remove class when another tab is clicked)
    tabs[0].addEventListener('click', function() {
        console.log("You clicked the first tab");
        $(this).toggleClass('active');
    });
    tabs[1].addEventListener('click', function() {
        console.log("You clicked the second tab");
        $(this).toggleClass('active');
    });
    tabs[2].addEventListener('click', function() {
        console.log("You clicked the third tab");
        $(this).toggleClass('active');
    });
})