(function ($) {
    "use strict";
    /* ==================== Table Of Content ====================
    1.	Script Initialization
    2.	preloaderSetup
    3.	Plugins Activations
    4.  Hero Slider
    5.  Services Filter
    6. Testimonials Slider
    ===========================================================*/
    /* ================================================
       Script Initialization
    ==================================================*/

    // Window Load Function
    $(window).on('load', function () {
        preloaderSetup();

    });

    // Document Ready Function
    $(document).ready(function () {
        pluginsActivation();
        servicesFilter();
        navbar();
        testimonialArea();
    });

    // Window Resize Function
    $(window).on('resize', function () {
        navbar();
    });

    // Window Scroll Function
    $(window).on('scroll', function () {
        scrollSpy();
        stickyNav();
    });

    // ========================== preloaderSetup ==========================
    function preloaderSetup() {
        $('#preloader')
            .fadeOut('slow', function () {
                $(this).remove();
            });
    } // preloaderSetup

    // ========================== Plugins Activations ==========================
    function pluginsActivation() {
        // Scroll Animation
        AOS.init({offset: 50, duration: 500, easing: 'ease-in-sine'});

        // Smooth Scroll
        var navHeight = $('.page-header .navbar-nav').outerHeight();
        $('body').smoothScroll({
            delegateSelector: '#navbarNav .nav-link, .hero-mouse',
            offset: -navHeight,
            easing: "easeOutBack",
            speed: 1234
        });

        // Hover Direction Change
        $(".snake_dir").snakeify({speed: 300});

        // Magnific Popup
        $('.m-popup').magnificPopup({
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            type: 'image'
        });

        // Change Scrollbar Color
        var color = getComputedStyle(document.body).getPropertyValue('--primary-color');
        $("body").niceScroll({cursorcolor: color, cursorwidth: "5px", cursorborder: '0', scrollspeed: 180, bouncescroll: true});

        // Counter Up Plugin
        $('.counter').counterUp({delay: 100, time: 3000});

        // Masonry
        $('.blog-masonry-init').isotope({itemSelector: '.masonry-item', percentPosition: true, masonry: {}})

    }

    // ========================== Navbar ==========================
    function navbar() {
        // Trigger Icon Button when click menu link
        if ($(window).width() < 975) {

            $('.page-header .navbar-nav .nav-link')
                .on('click', function () {
                    $(".page-header .navbar-toggler-icon").trigger("click");
                })
        }
    }

    // ========================== Sticky Nav ==========================

    function stickyNav() {
        var top = $(window).scrollTop();

        if (top >= 150) {
            $('.page-header .navbar').addClass('sticky');
        } else {
            $('.page-header .navbar').removeClass('sticky');
        }
    }

    // ========================== Services Filter ==========================
    function servicesFilter() {
        // init Isotope
        var $grid = $('.filter-grid').isotope({
            // options
        });
        // filter items on button click
        $('.filter-button-group').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({filter: filterValue});
            $(this)
                .addClass('active')
                .siblings()
                .removeClass('active');
        });
    }

    // ========================== ScrollSpy ==========================

    function scrollSpy() {
        var scrollLink = $('.page-header .navbar-nav .nav-link');
        var minusSpace = $('.page-header .navbar-nav').outerHeight();

        // Scroll Animation Function Window Scroll
        var topPos = $(window).scrollTop();
        scrollLink.each(function () {
            var section = $(this.hash);
            // This Line Immportant for Console Error
            if (section.length) {
                var secPos = section
                    .offset()
                    .top - minusSpace;
            }
            // Add Active Class
            if (secPos <= topPos) {
                $(this)
                    .parent()
                    .addClass('active')
                    .siblings()
                    .removeClass('active');
            }
        })

    }
    // ========================== Testimonial Area ==========================
    function testimonialArea() {
        $('.test-slider-init').slick({prevArrow: '<button type="button" class="slick-prev"><</button>', nextArrow: '<button type="button" class="slick-next">></button>', autoplay: false, autoplaySpeed: 4000, speed: 1000})
    }

})(jQuery); // End of use strict