/**
 * Created by Rasiel on 6/01/15.
 */
$(document).ready(function() {


    $("#owl-kitchens").owlCarousel({

        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        navigation:false,
        transitionStyle : "fadeUp",


        autoPlay : true,
        stopOnHover : true

        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });


    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if (scroll > jQuery("#promo").offset().top-400) {
            jQuery(".itemPopular").removeClass("hidden")
            jQuery(".itemPopular").addClass("fadeInUp")
        } else {
            jQuery(".itemPopular").removeClass("fadeInUp")
            jQuery(".itemPopular").addClass("hidden")
        }
    });


});