$(function () {
  // Navbar

  let burgerBtn = document.querySelector(".navbar-toggler");
  let mobileLink = document.querySelector(".services-btn");
  burgerBtn.addEventListener("click", function (e) {
    $("header .wrapper-menu").toggleClass("open");
    e.preventDefault();
  });

  mobileLink.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(this);
    $(".mobile-sub").slideToggle();
  });

  $(".slider .owl-carousel").owlCarousel({
    loop: true,
    dots: true,
    autoplay: true,
    nav: true,
    autoplayTimeout: 8000,
    navContainer: ".carousel-nav",
    dotsContainer: ".carousel-dots",
    autoplayHoverPause: true,
    animateOut: "fadeOut",
    navText: [
      "<img src='/img/main-left-arrow.svg'>",
      "<img src='/img/main-right-arrow.svg'>",
    ],
    responsive: {
      0: {
        items: 1,
      },
    },
  });
  $(".services .owl-carousel").owlCarousel({
    margin: 20,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        // dots:false
      },
    },
  });
  $(".references .owl-carousel").owlCarousel({
    margin: 20,
    loop: true,

    autoplay: true,
    responsive: {
      0: {
        items: 2,
        slideBy: 2,
      },
      320: {
        items: 3,
        slideBy: 3,
      },
      576: {
        items: 4,
        slideBy: 4,
      },
      992: {
        items: 6,
        slideBy: 6,
      },
    },
  });
  $(window).scroll(function () {
    let header = $("header"),
      headHeight = header.height(),
      scroll = $(this).scrollTop();

    if (scroll > headHeight) {
      header.addClass("fixed animate__fadeInDownBig header_bg_color");
    } else {
      header.removeClass("fixed animate__fadeInDownBig header_bg_color");
    }
  });

  $(".wishlist").click(function (e) {
    $(this).find("svg path").toggleClass("fill-icon");
    e.preventDefault();
  });
});
