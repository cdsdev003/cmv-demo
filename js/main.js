(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Header carousel
    // $(".header-carousel").owlCarousel({
    //     autoplay: true,
    //     smartSpeed: 1500,
    //     loop: true,
    //     nav: false,
    //     dots: true,
    //     items: 1,
    //     dotsData: true,
    // });


    // Testimonials carousel
    // $('.testimonial-carousel').owlCarousel({
    //     autoplay: true,
    //     smartSpeed: 1000,
    //     loop: true,
    //     nav: false,
    //     dots: true,
    //     items: 1,
    //     dotsData: true,
    // });
    const yearFooter = document.getElementById('year');
    const date = new Date();
    yearFooter.innerText = date.getFullYear();

    
})(jQuery);


let tinySdlier = () => {
  let propertySlider = document.querySelectorAll(".property-slider");
  if (propertySlider.length > 0) {
    let tnsSlider = tns({
      container: ".property-slider",
      mode: "carousel",
      speed: 700,
      gutter: 30,
      items: 3,
      autoplay: true,
      autoplayButtonOutput: false,
      controlsContainer: "#property-nav",
      responsive: {
        0: {
          items: 1,
        },
        700: {
          items: 2,
        },
        900: {
          items: 3,
        },
      },
    });
  }
};
tinySdlier();


// let swiper = new Swiper(".bloom-swiper", {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     loop: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });


  document.addEventListener("DOMContentLoaded", function () {
    var splide = new Splide(".splide",{
      perPage: 1,
      rewind : true,
      autoplay:true 
    } );
    splide.mount();
  });