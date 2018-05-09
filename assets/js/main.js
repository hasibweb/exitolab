(function ($) {
    "use strict";
    /* ==================== Table Of Content ====================
    1.	Script Initialization
    2.	preloaderSetup
    3.	Mobile Menu
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
        scrollSpy();
        navbar();
    });

    // Window Resize Function
    $(window).on('resize', function () {});

    // Window Scroll Function
    $(window).on('scroll', function () {

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
        AOS.init({
            offset: 50
        });
        // Hover Direction Change
        $(".snake_dir").snakeify({
            speed: 300
        });

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
        // console.log(color)
        $("body").niceScroll({
            cursorcolor: color,
            cursorwidth: "8px",
            cursorborder: '0',
            scrollspeed: 180,
            bouncescroll: true
        });

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

        // Sticky Navbar
        $(window).on('scroll', function () {
            var top = $(window).scrollTop();

            if (top >= 150) {
                $('.page-header .navbar').addClass('sticky');
            } else {
                $('.page-header .navbar').removeClass('sticky');
            }

        });

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
            $grid.isotope({
                filter: filterValue
            });
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
        var easing = "easeOutBack";

        // Scroll Animation Function
        function scrollAnim(link, space, dur, ease) {
            $('html, body').animate({
                scrollTop: $(link.hash)
                    .offset()
                    .top - space
            }, dur, ease)
        }

        // Fire when click
        scrollLink
            .on('click', function (e) {
                e.preventDefault;
                $(this)
                    .parent()
                    .addClass('active')
                    .siblings()
                    .removeClass('active');
                // call the scrollAnim function
                scrollAnim(this, minusSpace, 1234, easing);
            })
        // Fire when Mouse button click
        $('.hero-mouse').on('click', function (e) {
            e.preventDefault;
            // call the scrollAnim function
            scrollAnim(this, minusSpace, 2234, 'easeOutQuint');
        })
        // Window Scroll
        $(window).on('scroll', function () {
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

        })
    }

})(jQuery); // End of use strict