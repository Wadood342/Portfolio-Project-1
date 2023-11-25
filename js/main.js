document.addEventListener('DOMContentLoaded', function () {
    "use strict";

    // Spinner
    let spinner = function () {
        setTimeout(function () {
            let spinnerElement = document.getElementById('spinner');
            if (spinnerElement) {
                spinnerElement.classList.remove('show');
            }
        }, 1);
    };
    spinner();

    // Initiate the wowjs
    new WOW().init();

    // Fixed Navbar
    window.addEventListener('scroll', function () {
        let fixedTop = document.querySelector('.fixed-top');
        if (window.innerWidth < 992) {
            if (window.scrollY > 45) {
                fixedTop.classList.add('bg-dark', 'shadow');
            } else {
                fixedTop.classList.remove('bg-dark', 'shadow');
            }
        } else {
            if (window.scrollY > 45) {
                fixedTop.classList.add('bg-dark', 'shadow');
                fixedTop.style.top = '-45px';
            } else {
                fixedTop.classList.remove('bg-dark', 'shadow');
                fixedTop.style.top = '0';
            }
        }
    });

    // Back to top button
    window.addEventListener('scroll', function () {
        let backToTop = document.querySelector('.back-to-top');
        if (window.scrollY > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    let backToTopButton = document.querySelector('.back-to-top');
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Causes progress
    let causesProgress = document.querySelector('.causes-progress');
    if (causesProgress) {
        causesProgress.addEventListener('scroll', function () {
            document.querySelectorAll('.progress .progress-bar').forEach(function (bar) {
                bar.style.width = bar.getAttribute('aria-valuenow') + '%';
            });
        });
    }

    // Testimonials carousel
    let testimonialCarousel = document.querySelector(".testimonial-carousel");
    if (testimonialCarousel) {
        new Glide(testimonialCarousel, {
            type: 'carousel',
            autoplay: false,
            animationDuration: 1000,
            focusAt: 'center',
            perView: 1,
            breakpoints: {
                768: {
                    perView: 2
                }
            },
            navigation: {
                nextEl: '.bi-arrow-right',
                prevEl: '.bi-arrow-left'
            }
        }).mount();
    }
});
