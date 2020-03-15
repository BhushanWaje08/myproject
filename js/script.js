/* $(function () {

  $('h1').hide(1000).show(1000);

$('#main').css({
  color: 'red',
  fontSize:50
});



$('h1').click(function () {

  $('.content').css({
    color: 'blue',
    fontSize: 25,
    textAlign:'center'

  });

});

});
$(window).on("load", function () {
  alert('window is loaded.');
}); */

/*##############
preloader
############### */

$(window).on('load', function() {
  $('#status').fadeOut();
  $('#preloader')
    .delay(500)
    .fadeOut();
});
/*##############
Animation
############### */

/*##############
Team
############### */
$(document).ready(function() {
  $('#team-members').owlCarousel({
    items: 2,
    autoplay: true,
    smartSpeed: 700,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
  });
});

/*##############
progress bar
############### */
$(function() {
  $('#progress-element').waypoint(
    function() {
      $('.progress-bar').each(function() {
        $(this).animate(
          {
            width: $(this).attr('aria-valuenow') + '%',
          },
          1000
        );
      });
      //this.distroy();
    },
    {
      offset: 'bottom-in-view',
    }
  );
});

/*##############
Responsiive tap
############### */

$(function() {
  $('#services-tabs').responsiveTabs({
    animation: 'slide',
  });
});

/*##############
portfolio
############### */

$(window).on('load', function() {
  mixitup('.mixitup-container', {
    controls: {
      toggleDefault: 'none',
    },
  });
});

/* $(function () {
  $("#mixitup-filters").on("click", function() {
  console.log("hiii");
  $("#mixitup-filters")
  .find(".active")
  .removeClass("active");
  });
  }); */

/*##############
magnifire
############### */
/* $(function () {
  $("#portfolio-wrapper").on('click', function () {
    $(this).next().magnificPopup('open');
});
});
  $("#portfolio-wrapper").each(function(){
    $(this).magnificPopup({
    delegate:'a',
    type:'image',
    gallery: {
      enabled: true,
      navigateByImgClick: true

    }
  });
}); */

$(function() {
  $('#portfolio-wrapper').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true,
    },
  });
});

/*##############
testimonial
############### */

$(document).ready(function() {
  $('.testimonial-slider').owlCarousel({
    items: 1,
    autoplay: false,
    smartSpeed: 700,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
  });
});

/*##############
stats
############### */
$(function() {
  $('.counter').counterUp({
    delay: 10,
    time: 2000,
  });
});

/*##############
client
############### */
$(document).ready(function() {
  $('#clients-list').owlCarousel({
    items: 6,
    autoplay: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
  });
});

/*##############
google-map
############### */
$(window).on('load', function() {
  var addressString = 'Nashik,Maharashtra,India';
  var mylatlng = { lat: 19.997454, lng: 73.789803 };

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: mylatlng,
  });
  var marker = new google.maps.Marker({
    position: mylatlng,
    map: map,
    title: 'Click To See Address',
  });
  var infowindow = new google.maps.InfoWindow({
    content: addressString,
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
});

/*##############
navigation
############### */

$(function () {
  $(window).scroll(function() {
    if ($(window).scrollTop() > 50) {
      $("nav").addClass('white-nav-top');
      $(".navbar-brand img").attr("src", "img/blog/logo-dark.png");
      $("#back-to-top").fadeIn();
    } else {
      $("nav").removeClass('white-nav-top');
      $(".navbar-brand img").attr("src", "img/blog/logo.png");
      $("#back-to-top").fadeOut();
    }
  });
});

/*##############
animation
############### */
$(function () {
  new WOW().init();
});
