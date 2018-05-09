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
        animations();
        servicesFilter();
        scrollSpy();
    });

    // Window Resize Function
    $(window).on('resize', function () {});

    // Window Scroll Function
    $(window).on('scroll', function () {
        var top = $(window).scrollTop();

        if (top >= 150) {
            $('.page-header .navbar').addClass('sticky');
        } else {
            $('.page-header .navbar').removeClass('sticky');
        }

    });

    // ========================== preloaderSetup ==========================
    function preloaderSetup() {
        $('#preloader')
            .fadeOut('slow', function () {
                $(this).remove();
            });
    } // preloaderSetup

    // ========================== Animations ==========================
    function animations() {
        AOS.init({
            offset: 50
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

    // Hover dir
    $(".snake_dir").snakeify({
        speed: 300
    })

})(jQuery); // End of use strict