
/*global $, console */
//Jquery
$(window).ready(function () {
    'use strict';
    $('.text h1').delay(500).fadeIn(500);
    
    $('.video-background').delay(1000).fadeIn(500);
    
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 200) {
            
            $('.info').delay(500).fadeIn(500);
        }
    });
});

// Pure javaScript
var buttonS = document.getElementById('scrollTo');

window.onscroll = function () {
    
    'use strict';
    
    if (window.pageYOffset >= 100) {
        buttonS.style.opacity = "1";
    } else {
        buttonS.style.opacity = "0";
    }
};
buttonS.onclick = function () {
    'use strict';
    window.scrollTo(0, 0);
};
