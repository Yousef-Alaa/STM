/* global document */

var
    topBtn = document.querySelector('.to-top'),
                                    
    preLoader = document.querySelector('.preloader');

window.onscroll = function () {
    'use strict';
    if (window.pageYOffset >= 600) {
        topBtn.style.bottom = "25px";
    } else {
        topBtn.style.bottom = "-45px";
    }
};

function load() {
    'use strict';
    preLoader.style.display = 'none';
}

window.onload = setTimeout(load, 4000);