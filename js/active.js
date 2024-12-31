
$ (document).ready (function(){

    $('#mobile-menu').meanmenu({
       meanScreenWidth: "600",
    });


    /* video-popup */
    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
      });

      $('.slider-active ').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

})