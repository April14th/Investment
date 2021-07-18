jQuery(document).ready(function() {
    $(".modal").each(function(l) { $(this).on("show.bs.modal", function(l) { var o = $(this).attr("data-easein"); "shake" == o ? $(".modal-dialog").velocity("callout." + o) : "pulse" == o ? $(".modal-dialog").velocity("callout." + o) : "tada" == o ? $(".modal-dialog").velocity("callout." + o) : "flash" == o ? $(".modal-dialog").velocity("callout." + o) : "bounce" == o ? $(".modal-dialog").velocity("callout." + o) : "swing" == o ? $(".modal-dialog").velocity("callout." + o) : $(".modal-dialog").velocity("transition." + o) }) });


    $("#phone").mask("+7(999)-999-99-99");

    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 1) {
            jQuery('.fixed-top').addClass("fixeded");
        } else {
            jQuery('.fixed-top').removeClass("fixeded");
        }
    });
    jQuery('.dropdown').hover(function() {
        jQuery(this).toggleClass('dropActive');
    });
    if (jQuery(window).width() < 767) {
        jQuery('.dropdown').click(function() {
            jQuery(this).toggleClass('dropActive');

        });

    }

    jQuery(document).ready(function() {
        if (jQuery(window).height() > jQuery('body').height()) {
            var addss = jQuery(window).height() - jQuery('body').height() + jQuery('#content').height();
            jQuery('#content').css('min-height', addss + 'px');
        }
    });
    if ($(window).width() > 767) {
        $('#slider-1').owlCarousel({
            loop: true,
            items: 5,
            autoplay: true,
            autoplayHoverPause: true,
            nav: true,
            dot: true,
            navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
            margin: 0,
            heightAuto: true,

            /*responsive: {
                0: {
                    items: 1,
                    nav:true
                },
                600: {
                    items: 1,
                    nav:true
                },
                1000: {
                    items: 1,
                    nav:true
                }
            }*/

        });

    } else {
        $('#slider-1').owlCarousel({
            loop: true,
            items: 5,
            autoplay: true,
            autoplayHoverPause: true,
            nav: true,
            dot: true,
            navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
            margin: 0,
            heightAuto: true,

            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                768: {
                    items: 3,
                    nav: true
                },
                1200: {
                    items: 5,
                    nav: true
                }
            }

        });
    }


    $("#mainSlider").owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        center: false,
        autoHeight: true,
        nav: true,
        navContainer: ".navigation",
        dotsContainer: ".customDots",
        stagePadding: 0,
        autoplayHoverPause: true,
        autoplay: false,
        autoplayTimeout: 4000,
        navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
        dots: true,
        dotsData: false,
        smartSpeed: 1000,
    });

    let owl=$("#mainSlider");
	owl.owlCarousel();
	$(".navigationNextBtn").click(function(){
		owl.trigger("next.owl.carousel");
	});
	$(".navigationPrevBtn").click(function(){
		owl.trigger("prev.owl.carousel");
	});


    $("#partnersSlider").owlCarousel({
        items: 4,
        loop: true,
        margin: 25,
        center: false,
        autoHeight: true,
        nav: true,
        navContainer: ".partnersNav",
        stagePadding: 0,
        autoplayHoverPause: true,
        autoplay: true,
        autoplayTimeout: 4000,
        navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
        dots: true,
        dotsData: false,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 2,
                margin: 15
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4
            },
            1200: {
                items: 4
            }
        }
    });

    let owl2 = $("#partnersSlider");
    owl2.owlCarousel();
    $(".partnersNavNextBtn").click(function() {
        owl2.trigger("next.owl.carousel");
    });
    $(".partnersNavPrevBtn").click(function() {
        owl2.trigger("prev.owl.carousel");
    });

    if (document.location.pathname == "/") {
        jQuery('.fake_men').css({ "height": "0" });
    } else {
        if (jQuery(window).width() < 767) {
            jQuery('.fake_men').css({ "height": "50px" });
        } else {
            jQuery('.fake_men').css({ "height": "100px" });
        }

    }

    jQuery('ul.navbar-nav > li').hover(function() {
        jQuery(this).find('.dropdown-menu').stop(true, true).fadeIn();
      }, function() {
        jQuery(this).find('.dropdown-menu').stop(true, true).fadeOut();
      })

});