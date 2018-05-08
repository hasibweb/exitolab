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

    });

    // Window Resize Function
    $(window).on('resize', function () {});

    // Window Scroll Function
    $(window).on('scroll', function () {
        var top = $(window).scrollTop();

        if (top >= 100) {
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
        AOS.init({offset: 50});

    }

})(jQuery); // End of use strict