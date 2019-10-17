$.fn.toggle2classes = function(class1, class2) {
  if (!class1 || !class2) return this;

  return this.each(function() {
    var $elm = $(this);

    if ($elm.hasClass(class1) || $elm.hasClass(class2))
      $elm.toggleClass(class1 + " " + class2);
    else $elm.addClass(class1);
  });
};

$(document).ready(function() {
  // Main banner home
  $(".dc_hbanner").owlCarousel({
    items: 1,
    smartSpeed: 450,
    rewind: true,
    mouseDrag: false,
    touchDrag: false,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    animateIn: "bannerIn",
    animateOut: "bannerOut"
  });

  // procducts home
  $(".dc_hproducts").owlCarousel({
    stagePadding: 0,
    autoWidth: true,
    center: true,
    loop: true,
    margin: 35,
    nav: true,
    items: 1,
    autoplay: false,
    responsive: {
      0: {
        autoWidth: false
      },
      1000: {
        autoWidth: true
      }
    }
  });

  // Nav mobile
  $(".dc_nav__mob").click(function() {
    $(".dc_nav, .dc_nav__mob, .dc_nav__container").toggle2classes(
      "active",
      "disabled"
    );
  });
});

$(window).scroll(function() {
  var scTop = $(window).scrollTop();
  if (scTop >= 1) {
    $(".dc_header").addClass("fixed");
  } else {
    $(".dc_header").removeClass("fixed");
  }
});

$(window).resize(function() {});
