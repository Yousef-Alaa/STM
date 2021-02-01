/* global window,setTimeout */

let
    topBtn = document.querySelector('.to-top'),

    preLoader = document.querySelector('.preloader'),

    nav = document.querySelector('nav'),

    footer = document.querySelector('footer'),

    navContent =
    `
    <div class="container-lg">
        <a href='index.html' class="navbar-brand"><span class="stm">STM</span></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span><i class="fas fa-bars"></i></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="about.html">About us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="products.html">Products</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="contact.html">Contacts</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fas fa-globe"></i> Rus</a>
                </li>
            </ul>
        </div>
    </div>

    `,

    footerContent =
    `
    <div class="contact container">
        <h2>Contact <span class="h-span">Us</span></h2>
        <div class="row">
            <section class="col-md-6 col-10 offset-1 offset-md-0">
                <p>Interested in telecommunication<br>equipment? Write to us!</p>
                <span>Our Office:</span>
                <p>12411 W Fielding Circle, Los<br>Angeles, 90094 CA, USA</p>
                <a href="#" class="blue-sp">info@smarttechnomash.uz</a>
            </section>
            <section class="col-md-6 col-10 offset-1 offset-md-0">
                <form>
                    <div class="form-group">
                        <input class="form-control" type="text" placeholder="Full Name">
                        <input class="form-control" type="email" placeholder="Your Email">
                        <input class="form-control" type="text" placeholder="Text Your Message Here">
                        <a href="#"><i class="fas fa-long-arrow-alt-right"></i></a>
                        <span>Send Message</span>
                    </div>
                </form>
            </section>
        </div>
    </div>
    <hr>
    <div class="copy container">
        <p>Copyright Are Reserved. All Works Are Protected By Copyright Of The Corresponding Authors.</p>
        <p>
            Designed By <span class="blue-sp">Emil Ismayilov</span>
            Coding By <span class="blue-sp">Yousef Alaa</span>
        </p>
    </div>
    `;

function load() {
    'use strict';
    preLoader.style.display = 'none';
}

window.onload = setTimeout(load, 3500);

nav.innerHTML = navContent;

if (document.title === 'STM - Home') {

    document.getElementsByClassName('nav-item')[0].classList.add('active');

} else if (document.title === 'STM - About') {

    document.getElementsByClassName('nav-item')[1].classList.add('active');

} else if (document.title === 'STM - Products') {

    document.getElementsByClassName('nav-item')[2].classList.add('active');

} else if (document.title === 'STM - Contact') {

    document.getElementsByClassName('nav-item')[3].classList.add('active');

}

footer.innerHTML = footerContent;

window.onscroll = function () {
    'use strict';
    if (window.pageYOffset >= 600) {
        topBtn.style.bottom = "50px";
    } else {
        topBtn.style.bottom = "-45px";
    }
};

new WOW().init();


console.log('Done Message');
