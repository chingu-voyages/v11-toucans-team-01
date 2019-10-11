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
    var tab1 = document.getElementById('tab1');
    var tab2 = document.getElementById('tab2');
    var tab3 = document.getElementById('tab3');
    var tab1Content = document.getElementById('tab1-content');
    var tab2Content = document.getElementById('tab2-content');
    var tab3Content = document.getElementById('tab3-content');

    tab1.addEventListener('click', function() {
        tab1.classList.add('active');
        tab2.classList.remove('active');
        tab3.classList.remove('active');
        tab1Content.style.display = 'block';
        tab2Content.style.display = 'none';
        tab3Content.style.display = 'none';
    });

    tab2.addEventListener('click', function() {
        tab1.classList.remove('active');
        tab2.classList.add('active');
        tab3.classList.remove('active');
        tab1Content.style.display = 'none';
        tab2Content.style.display = 'block';
        tab3Content.style.display = 'none';
    });

    tab3.addEventListener('click', function() {
        tab1.classList.remove('active');
        tab2.classList.remove('active');
        tab3.classList.add('active');
        tab1Content.style.display = 'none';
        tab2Content.style.display = 'none';
        tab3Content.style.display = 'block';
    });
})