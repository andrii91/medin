! function (a) {
  a.fn.viewportChecker = function (b) {
    var c = {
      classToAdd: "visible",
      classToRemove: "invisible",
      classToAddForFullView: "full-visible",
      removeClassAfterAnimation: !1,
      offset: 100,
      repeat: !1,
      invertBottomOffset: !0,
      callbackFunction: function (a, b) {},
      scrollHorizontal: !1,
      scrollBox: window
    };
    a.extend(c, b);
    var d = this,
      e = {
        height: a(c.scrollBox).height(),
        width: a(c.scrollBox).width()
      };
    return this.checkElements = function () {
      var b, f;
      c.scrollHorizontal ? (b = Math.max(a("html").scrollLeft(), a("body").scrollLeft(), a(window).scrollLeft()), f = b + e.width) : (b = Math.max(a("html").scrollTop(), a("body").scrollTop(), a(window).scrollTop()), f = b + e.height), d.each(function () {
        var d = a(this),
          g = {},
          h = {};
        if (d.data("vp-add-class") && (h.classToAdd = d.data("vp-add-class")), d.data("vp-remove-class") && (h.classToRemove = d.data("vp-remove-class")), d.data("vp-add-class-full-view") && (h.classToAddForFullView = d.data("vp-add-class-full-view")), d.data("vp-keep-add-class") && (h.removeClassAfterAnimation = d.data("vp-remove-after-animation")), d.data("vp-offset") && (h.offset = d.data("vp-offset")), d.data("vp-repeat") && (h.repeat = d.data("vp-repeat")), d.data("vp-scrollHorizontal") && (h.scrollHorizontal = d.data("vp-scrollHorizontal")), d.data("vp-invertBottomOffset") && (h.scrollHorizontal = d.data("vp-invertBottomOffset")), a.extend(g, c), a.extend(g, h), !d.data("vp-animated") || g.repeat) {
          String(g.offset).indexOf("%") > 0 && (g.offset = parseInt(g.offset) / 100 * e.height);
          var i = g.scrollHorizontal ? d.offset().left : d.offset().top,
            j = g.scrollHorizontal ? i + d.width() : i + d.height(),
            k = Math.round(i) + g.offset,
            l = g.scrollHorizontal ? k + d.width() : k + d.height();
          g.invertBottomOffset && (l -= 2 * g.offset), k < f && l > b ? (d.removeClass(g.classToRemove), d.addClass(g.classToAdd), g.callbackFunction(d, "add"), j <= f && i >= b ? d.addClass(g.classToAddForFullView) : d.removeClass(g.classToAddForFullView), d.data("vp-animated", !0), g.removeClassAfterAnimation && d.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
            d.removeClass(g.classToAdd)
          })) : d.hasClass(g.classToAdd) && g.repeat && (d.removeClass(g.classToAdd + " " + g.classToAddForFullView), g.callbackFunction(d, "remove"), d.data("vp-animated", !1))
        }
      })
    }, ("ontouchstart" in window || "onmsgesturechange" in window) && a(document).bind("touchmove MSPointerMove pointermove", this.checkElements), a(c.scrollBox).bind("load scroll", this.checkElements), a(window).resize(function (b) {
      e = {
        height: a(c.scrollBox).height(),
        width: a(c.scrollBox).width()
      }, d.checkElements()
    }), this.checkElements(), this
  }
}(jQuery);


(function ($) {
  $.fn.carousel = function (options) {

    var defaults = {
      leftControl: '.corousel-prev',
      rightControl: '.corousel-next',
      elementsList: '.carousel-container',
      pixelsOffset: 290,
      currentLeftValue: 0,
      elementsCount: 0,
      maximumOffset: 0,
      minimumOffset: 0
    }

    var settings = $.extend(defaults, options);
    var $leftScroll = $(settings.leftControl);
    var $rightScroll = $(settings.rightControl);
    var $carousel = $(settings.elementsList);
    settings.elementsCount = $carousel.find('div.carousel-item').length;
    settings.minimumOffset = -((settings.elementsCount - 1) * settings.pixelsOffset);

    $leftScroll.on('click', function () {
      if (settings.currentLeftValue != settings.maximumOffset) {
        settings.currentLeftValue += 290;
        $carousel.animate({
          left: settings.currentLeftValue + "px"
        }, 500);
      }
    });

    $rightScroll.on('click', function () {
      if (settings.currentLeftValue != settings.minimumOffset) {
        settings.currentLeftValue -= 290;
        $carousel.animate({
          left: settings.currentLeftValue + "px"
        }, 500);
      }
    });

    var item = $('.docror-carousel .carousel-item'),
      dataDoctor, countItem = 0;

    $('.check-problem li').click(function () {
      $('.check-problem li').removeClass('active');
      $(this).addClass('active');

      $('input[name="problem"]').val($(this).attr('title'));

      for (var i = 0; i < item.length; i++) {
        dataDoctor = $($('.docror-carousel .carousel-item')[i]).data('doctor');
        dataDoctor = dataDoctor.split(',');

        for (var j = 0; j < dataDoctor.length; j++) {
          if ($(this).data('problem') == dataDoctor[j]) {
            $($('.docror-carousel .carousel-item')[i]).show(0);
            break;
          } else {
            $($('.docror-carousel .carousel-item')[i]).hide(0);
          }
        }

        if (!dataDoctor[j]) {
          countItem = countItem + 1;
        }

      }

      $('.docror-carousel').show(0);

      settings.minimumOffset = -(((settings.elementsCount - 1) - countItem) * settings.pixelsOffset);
      settings.currentLeftValue = 0;
      $carousel.animate({
        left: settings.currentLeftValue + "px"
      }, 500);
      countItem = 0;


    });
  }
})(jQuery);

$(function () {

  $('#docror-carousel').carousel();


});

$(document).ready(function () {

  $('.menu-btn, .menu-mob').click(function () {
    $(this).toggleClass('active');
    $(this).parent().find('.menu').slideToggle(200);
    $(this).parents('.nav').addClass('nav_fixed');
  });
  if ($(document).width() > 480) {
    $('.video-item:nth-child(1)').hover(function () {
        $(this).next().hide();
        $(this).next().next().hide();

      },
      function () {
        $(this).next().show();
        $(this).next().next().show();
      });
    $('.video-item:nth-child(2)').hover(function () {
        $(this).next().hide();
        $(this).next().next().hide();

      },
      function () {
        $(this).next().show();
        $(this).next().next().show();
      });
    $('.video-item:nth-child(3)').hover(function () {
        $(this).prev().hide();
        $(this).next().hide();

      },
      function () {
        $(this).prev().show();
        $(this).next().show();
      });
    $('.video-item:nth-child(4)').hover(function () {
        $(this).prev().hide();
        $(this).prev().prev().hide();

      },
      function () {
        $(this).prev().show();
        $(this).prev().prev().show();
      });


  }

  if ($(document).width() < 480) {
    $(window).scroll(function () {
      return $('.nav').toggleClass("nav_fixed", $(window).scrollTop() > 0);
    });

  }

  if ($(document).width() > 1200) {
    $('main').viewportChecker({
      offset: '80%',
      repeat: true,
      callbackFunction: function (elem, action) {
        if (action == 'add') {
          $('#fixed').slideDown(400);
        } else {
          $('#fixed').slideUp(400);
        }
      }
    });
  }

  $('#fixed .menu li').click(function () {
    $('#fixed .menu-btn').removeClass('active');
    $('#fixed .menu').slideUp();
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $('.fixed').css({
        'box-shadow': '3px 4px 10px rgba(0,0,0,0.15)',
        'background-color': '#fff',
      });
    } else {
      $('.fixed').css({
        'box-shadow': '3px 4px 10px rgba(0,0,0,0)',
        'background-color': 'transparent',
      });
    }
  });


  $('.check-problem li').hover(function (e) {
      $('.docror-carousel').show(0);
     
 // положение элемента
    var pos = $(this).parents('.check-problem').offset();
    var elem_left = pos.left;
    var elem_top = pos.top;
    // положение курсора внутри элемента
    var Xinner = e.pageX - elem_left;
    var Yinner = e.pageY - elem_top;
    console.log("X: " + Xinner + " Y: " + Yinner);
    
    if ($(document).width() > 480) {
    
       $('.docror-carousel').css({
          'top' : Yinner + 15 + 'px',
         'left' : Xinner + 'px',
         'margin-left' : '-145px',
         'min-height' : '412px',
         'max-height' : '413px',
      });
    }
      /*var item = $('.docror-carousel .carousel-item'),
        dataDoctor, countItem = 0;
      for (var i = 0; i < item.length; i++) {
        dataDoctor = $($('.docror-carousel .carousel-item')[i]).data('doctor');
        dataDoctor = dataDoctor.split(',');

        for (var j = 0; j < dataDoctor.length; j++) {
          if ($(this).data('problem') == dataDoctor[j]) {
            $($('.docror-carousel .carousel-item')[i]).show(0);
            break;
          } else {
            $($('.docror-carousel .carousel-item')[i]).hide(0);
          }
        }

        if (!dataDoctor[j]) {
          countItem = countItem + 1;
        }

      }*/
    },
    function () {
      if ($(this).hasClass('active')) {
        $('.docror-carousel').show(0);
      } else {
        $('.docror-carousel').hide(0);
        $('.check-problem li').removeClass('active');
      }
    });






  var videoSlider = $('.video-carousel');
  videoSlider.owlCarousel({
    loop: false,
    margin: 0,
    items: 1,
    responsiveClass: true
  });

  videoSlider.on('changed.owl.carousel', function (event) {
    var currentItem = event.item.index;
    var size = event.page.size;
    $('.video__slider-cur').text('0' + Math.ceil(currentItem / size + 1));
  });

  $('.video__slider-next').click(function () {
    videoSlider.trigger('next.owl.carousel');
  });
  $('.video__slider-prev').click(function () {
    videoSlider.trigger('prev.owl.carousel');
  });


  var photoSlider = $('.photo-carousel');
  photoSlider.owlCarousel({
    loop: false,
    margin: 0,
    items: 1,
    responsiveClass: true
  });

  photoSlider.on('changed.owl.carousel', function (event) {
    var currentItem = event.item.index;
    var size = event.page.size;
    $('.photo__slider-cur').text('0' + Math.ceil(currentItem / size + 1));
  });
  $('.photo__slider-next').click(function () {
    photoSlider.trigger('next.owl.carousel');
  });
  $('.photo__slider-prev').click(function () {
    photoSlider.trigger('prev.owl.carousel');
  });



  $('.gmap').each(function () {
    var container = this;

    var mapOptions = {
      zoom: $(container).data('zoom'),
      zoomControl: true,
      mapTypeControl: false,
      streetViewControl: false,
      scrollwheel: false, //zoom on scroll
      draggable: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(container, mapOptions);
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({
        'address': $(container).data('address')
      },
      function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          new google.maps.Marker({
            position: results[0].geometry.location,
            map: map,
            icon: $(container).data('marker')
          });
          map.setCenter(results[0].geometry.location);
        }
      }
    );

  });

  $('.modal-btn').click(function (e) {
    e.preventDefault;
    $('#' + $(this).data('modal')).show('0');
    $('#' + $(this).data('modal')).animate({
      opacity: 1,
    }, 0);
    $('body').addClass('overl-h');
  });
  $('.overlay, .popup__close').click(function () {
    $('body').removeClass('overl-h');
    $('.modal').hide('0');
    $('.modal').animate({
      opacity: 0,
    }, 0);
  });

  $("input[name='phone']").inputmask("+38 (099) 999-99-99");

  $('.video-link').click(function () {
    var destination = $(".video").offset().top - 0;
    $("body,html").animate({
      scrollTop: destination
    }, 500);
  });
  $('.history-link').click(function () {
    var destination = $(".history").offset().top - 0;
    $("body,html").animate({
      scrollTop: destination
    }, 500);
  });




  $('.video-item').hover(function () {
      var vid = document.getElementById($(this).find('video').attr('id'));

      function playVid() {
        vid.play();
      }
      vid.volume = 0;
      playVid();

    },
    function () {
      var vid = document.getElementById($(this).find('video').attr('id'));

      function pauseVid() {
        vid.pause();
      }
      pauseVid();
      $(this).find('.video-info, .video-poster').show();
    });

  $('.video-btn').click(function () {
    var vid = document.getElementById($(this).parents('.video-item').find('video').attr('id'));
    vid.volume = 1;

    function playVid() {
      vid.play();
    }
    playVid();

    $(this).parents('.video-item').find('.video-info, .video-poster').hide();

  });

  $('.history-play').click(function () {
    var vid = document.getElementById($(this).parents('.item').find('video').attr('id'));
    vid.volume = 1;

    function playVid() {
      vid.play();
    }
    playVid();

    $(this).parent().hide();

  });

});