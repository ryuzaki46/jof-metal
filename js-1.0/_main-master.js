$(document).ready(function () {

  var timer = setTimeout(function () {
    $('.complex-preload').addClass('hide');
    $('.close-box.box-2').addClass('hide');
    // setTimeout(function() {
    //   $('.close-box.box-2').removeClass('hide');
    // }, 2000);
  }, 6000);

  // -=-=-=-=-=-=-=-=- SMOOTH SCROLL -=-=-=-=-=-=-=-=-
  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $("html").niceScroll({
      cursorcolor: "#6E7179", // change cursor color in hex
      cursorborder: "0px solid #FFF", // css definition for cursor border
      railpadding: {
        top: 0,
        right: 3,
        left: 0,
        bottom: 0
      }, // set padding for rail bar
      hidecursordelay: 4000,
      enablekeyboard: true,
      bouncescroll: true,
      smoothscroll: true,
      iframeautoresize: true,
      touchbehavior: false,
      scrollspeed: 80, // scrolling speed
      mousescrollstep: 30, // scrolling speed with mouse wheel (pixel)
    });

    if ($('.pos-sticky')[0]) {

      $('body').css({
        overflow: 'visible',
      });
    }
  } else {
    $('body').attr('id', 'mobile');

    if ($('.on_click_hide_mobile')[0]) {
      var_text = $('.on_click_hide_mobile').children('p').text();
      $('.on_click_hide_mobile').children('p').text(var_text == "scroll to continue" ? 'click to continue' : 'scroll to continue');

      $('.complex-preload').click(function () {
        $(this).addClass('hide');
        clearTimeout(timer);
      })
    }
  }
  // -=-=-=-=-=-=-=-=- SMOOTH SCROLL - - - END -=-=-=-=-=-=-=-=-

  if ($('.lazy')[0]) {

    $('.lazy').lazy();
  }

  if ($('.slider')[0]) {

    var slider = $(".slider"),
      slider_array = [];

    $.each(slider, function (index, item) {
      var children_length = $(item).children(".row").children().length,
        slider_min = $(item).data('minimum'),
        slider_min_m = $(item).data('minimum-m'),
        slider_min_t = $(item).data('minimum-t'),
        slider_type = $(item).data('type');

      slider_array.push({
        name: "minimum",
        value: slider_min
      }, {
        name: "type",
        value: slider_type
      });

      if (slider_type == 'responsive') {

        if (children_length >= slider_min) {

          $(item).addClass("responsive-slider-activated");

          // -=-=-=-=-=-=-=-=- SLIDER - - - START -=-=-=-=-=-=-=-=-
          if ($(item).hasClass('complex-header-slider')) {

            var slideCount = null;

            $('.complex-header-slider .row')
              .on('init', function (event, slick) {
                slideCount = slick.slideCount;
                setSlideCount();
                setCurrentSlideNumber(slick.currentSlide);
              })
              .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                setCurrentSlideNumber(nextSlide);
              })
              .slick({
                slidesToScroll: 1,
                slidesToShow: slider_min,
                // variableWidth     : true,
                dots: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 4000,
                touchThreshold: 100,
                // draggable: false,
                arrows: true, // true
                // prevArrow         : '<div class="btn-icon btn-prev"><div class="icon"><img alt="" src="assets/images/icons/icon-long-arrow.svg"></div></div>',
                // nextArrow         : '<div class="btn-icon btn-next"><div class="icon"><img alt="" src="assets/images/icons/icon-long-arrow.svg"></div></div>',
                prevArrow: false,
                nextArrow: false,
              });

            function setSlideCount() {
              var $el = $('#slide-count-wrap').find('#total');
              $el.text(slideCount);
            }

            function setCurrentSlideNumber(currentSlide) {
              var $el = $('#slide-count-wrap').find('#current');
              $el.text(currentSlide + 1);
            }

          } else if ($(item).hasClass('complex-room-slider')) {
            $('.complex-room-slider .row')
              .on('init', function (event, slick) {
                var rowWIdth = $(this).width(),
                  colWidth = $(this).find(".slick-current").width(),
                  colHeight = $(this).find(".slick-current").height();

                $(this).find(".btn-prev").css({
                  left: ((rowWIdth * 50 / 100) - colWidth / 2 - 56) + 10,
                  // bottom: (colHeight/5) * 1,
                })
                $(this).find(".btn-next").css({
                  right: ((rowWIdth * 50 / 100) - colWidth / 2 - 56) - 10,
                  // bottom: (colHeight/5) * -1,
                })
                console.log((rowWIdth * 50 / 100) + colWidth / 2 + 80 + 2);
              })
              .on('beforeChange', function (event, slick, currentSlide, nextSlide) {

              })
              .on('afterChange', function (event, slick) {

              })
              .slick({
                slidesToScroll: 1,
                slidesToShow: slider_min,
                dots: false,
                infinite: true,
                autoplay: false,
                touchThreshold: 100,
                centerMode: true,
                arrows: true, // true
                prevArrow: '<div class="btn-icon btn-prev"><div class="icon"><i class="fal fa-chevron-left"></i></div></div>',
                nextArrow: '<div class="btn-icon btn-next"><div class="icon"><i class="fal fa-chevron-right"></i></div></div>',
                responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1,
                      centerMode: true,
                      // infinite: true,
                      // dots: true
                    }
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      centerMode: true,
                    }
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      centerMode: true,
                    }
                  }
                ],
              });
          } else if ($(item).hasClass('complex-facilities-slider')) {
            $('.complex-facilities-slider .row')
              .on('init', function (event, slick) {

              })
              .on('beforeChange', function (event, slick, currentSlide, nextSlide) {

              })
              .on('afterChange', function (event, slick) {

              })
              .slick({
                slidesToScroll: 1,
                slidesToShow: slider_min,
                dots: false,
                infinite: true,
                autoplay: false,
                touchThreshold: 100,
                centerMode: true,
                arrows: true, // true
                // prevArrow: $('#complex-facilities-slider-prev'),
                // nextArrow: $('#complex-facilities-slider-next'),
                prevArrow: '<div class="btn-icon btn-prev"><div class="icon pr-1"><i class="fal fa-chevron-left"></i></div></div>',
                nextArrow: '<div class="btn-icon btn-next"><div class="icon pl-1"><i class="fal fa-chevron-right"></i></div></div>',
                responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      centerMode: true,
                      // infinite: true,
                      // dots: true
                    }
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      centerMode: true,
                    }
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      centerMode: true,
                    }
                  }
                ],
              });
          } else if ($(item).hasClass('complex-offers-slider')) {
            $('.complex-offers-slider .row')
              .on('init', function (event, slick) {

              })
              .on('beforeChange', function (event, slick, currentSlide, nextSlide) {

              })
              .on('afterChange', function (event, slick) {

              })
              .slick({
                slidesToScroll: 1,
                slidesToShow: slider_min,
                dots: false,
                infinite: true,
                autoplay: false,
                touchThreshold: 100,
                centerMode: true,
                arrows: true, // true
                prevArrow: '<div class="btn-icon btn-prev"><div class="icon pr-1"><i class="far fa-chevron-left"></i></div></div>',
                nextArrow: '<div class="btn-icon btn-next"><div class="icon pl-1"><i class="far fa-chevron-right"></i></div></div>',
                responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      centerMode: true,
                      // infinite: true,
                      // dots: true
                    }
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      centerMode: true,
                    }
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      centerMode: true,
                    }
                  }
                ],
              });
          } else if ($(item).hasClass('complex-big-image')) {

            $('.complex-big-image .row')
              .on("init", function (event, slick) {
                $(this).find(".slick-current").prev().addClass("beforeChange");
              })
              .on("afterChange", function (event, slick, direction) {
                $(this).find(".slick-slide").removeClass("beforeChange");
              })
              .slick({
                infinite: false,
                autoplay: false,
                draggable: false,
                dots: false,
                autoplaySpeed: 5000,
                centerPadding: '0',
                slidesToShow: slider_min,
                slidesToScroll: 1,
                fade: true,
                // prevArrow: '<div class="slide-btn btn-prev"></div>',
                // nextArrow: '<div class="slide-btn btn-next"></div>',
                nextArrow: false,
                prevArrow: false,
                touchThreshold: 100,
                slidesToScroll: 1,
                asNavFor: '.complex-thumbnail-image .row',

                responsive: [

                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                    }
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                    }
                  }
                ]
              });

          } else if ($(item).hasClass('complex-thumbnail-image')) {

            $('.complex-thumbnail-image .row')
              .on('init', function (event, slick) {
                slideCount = slick.slideCount;
                setSlideCount();
                setCurrentSlideNumber(slick.currentSlide);
              })
              .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                setCurrentSlideNumber(nextSlide);
              })
              .slick({
                infinite: false,
                autoplay: false,
                autoplaySpeed: 5000,
                centerPadding: '0',
                slidesToShow: slider_min,
                slidesToScroll: 1,
                focusOnSelect: true,
                dots: false,
                prevArrow: '<div class="btn-icon btn-prev"><div class="icon"><img alt="" src="../assets/images/icons/icon-long-arrow.svg"></div></div>',
                nextArrow: '<div class="btn-icon btn-next"><div class="icon"><img alt="" src="../assets/images/icons/icon-long-arrow.svg"></div></div>',
                // nextArrow: false,
                // prevArrow: false,
                touchThreshold: 100,
                asNavFor: '.complex-big-image .row',
                centerMode: true,
                focusOnSelect: true,

                responsive: [

                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 7,
                      slidesToScroll: 1,
                      // dots: false,
                      // centerMode: false,
                    }
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 5,
                      slidesToScroll: 1
                    }
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 5,
                      slidesToScroll: 1,
                    }
                  }
                ]
              });

            function setSlideCount() {
              var $el = $('#slide-count-wrap').find('#total');
              $el.text(slideCount);
            }

            function setCurrentSlideNumber(currentSlide) {
              var $el = $('#slide-count-wrap').find('#current');
              $el.text(currentSlide + 1);
            }

          } else {

            // $(item).children(".row")
            // 	.on("init", function (event, slick) {
            // 		$(this).find(".slick-current").prev().addClass("beforeChange");
            // 	})
            // 	.on("afterChange", function (event, slick, direction) {
            // 		$(this).find(".slick-slide").removeClass("beforeChange");
            // 	})
            // 	.slick({
            // 		slidesToScroll    : 1,
            // 		slidesToShow      : slider_min,
            // 		dots              : false,
            // 		infinite          : true,
            // 		autoplay          : false,
            // 		touchThreshold    : 100,
            // 		arrows            : true,
            // 		prevArrow         : '<div class="btn-icon btn-yellow btn-prev"><div class="icon"><i class="fas fa-chevron-left"></i></div></div>',
            // 		nextArrow         : '<div class="btn-icon btn-yellow btn-next"><div class="icon"><i class="fas fa-chevron-right"></i></div></div>',
            // });

          }
          // -=-=-=-=-=-=-=-=- SLIDER - - - END -=-=-=-=-=-=-=-=-
        }

      } else if (slider_type == 'mobile') {

        if (Modernizr.mq('(min-width: 768px)')) {

          if (children_length >= slider_min_t) {

            if ($(item).hasClass('slider-card-1')) {

              $(item).children(".row").slick({
                infinite: true,
                autoplay: true,
                autoplaySpeed: 8000,
                centerPadding: '0',
                slidesToShow: slider_min_t,
                dots: false,
                prevArrow: '<div class="slide-btn btn-prev"></div>',
                nextArrow: '<div class="slide-btn btn-next"></div>',
                nextArrow: false,
                prevArrow: false,
                touchThreshold: 100,
                beforeChange: () => dragging = true,
                afterChange: () => dragging = false,
                // responsive: [

                //     {
                //         breakpoint: 1100,
                //         settings: {
                //             slidesToShow: 4,
                //         }
                //     },
                // ]
              });

            }
          }
        } else {

          if (children_length >= slider_min_m) {

            if ($(item).hasClass('slider-card-1')) {

              $(item).children(".row").slick({
                infinite: true,
                autoplay: true,
                autoplaySpeed: 8000,
                centerPadding: '0',
                slidesToShow: slider_min_m,
                dots: false,
                prevArrow: '<div class="slide-btn btn-prev"></div>',
                nextArrow: '<div class="slide-btn btn-next"></div>',
                nextArrow: false,
                prevArrow: false,
                touchThreshold: 100,
                beforeChange: () => dragging = true,
                afterChange: () => dragging = false,
              });

            }
          }
        }
      }
    });
  }

  function icon_distance($class) {
    $($class).children(".text").next(".icon").css({
      marginLeft: 14
    });
    $($class).children(".text").prev(".icon").css({
      marginRight: 14
    });
  }
  if ($('.btn-icon')[0]) {
    // icon_distance(".btn-icon")
  }

  if ($('.link-icon')[0]) {
    icon_distance(".link-icon")
  }

  if ($('.btn-dropdown')[0]) {
    $('.btn-dropdown').each(function () {

      $(this).css({
        height: $(this).children(".dropdown-toggle").height(),
      })

      $(this).children(".dropdown-toggle").click(function () {
        $(this)
          .parent()
          .toggleClass("active");
        $(this)
          .children()
          .toggleClass("active");
        $(this)
          .parent()
          .siblings()
          .removeClass("active");
        $(this)
          .parent()
          .siblings()
          .children(".dropdown-toggle")
          .children(".btn")
          .removeClass("active");
      });

      $(this)
        .children(".dropdown-body")
        .children(".dropdown-item")
        .click(function () {
          $(this).addClass("active");
          $(this)
            .siblings()
            .removeClass("active");
          $(this)
            .parent()
            .parent()
            .removeClass("active");
        })
    })
  }

  if ($('.vjs-fluid')[0]) {
    var vjsHeight = $('.vjs-fluid').outerHeight();
    $('.video-wrapper').css({
      height: vjsHeight,
    })
  }

  if ($('.article')[0]) {
    var li_title_fz = $('.article').find('li').children(':first-child').css('font-size'),
      li_fz = $('.article').find('li');

    li_fz.css({
      fontSize: li_title_fz,
    });

    // console.log(li_title_fz);
  }

  if ($('.show_alert')[0]) {

    var alert_trigger = $(".show_alert"),
      alert_array = [],
      elements = $(),
      n_click = 0;

    function close_alert($var) {
      $var.css({
        top: 0
      });
      $var.removeClass('active');
    }

    $.each(alert_trigger, function (index, item) {

      var alert_length = $(item).length,
        alert_type = $(item).data('alert'),
        alert_for = $(item).data('alert-for'),
        alert_text = $(item).data('alert-text'),
        alert_icon = $(item).data('alert-icon');

      alert_array.push({
        name: "type",
        value: alert_type
      }, {
        name: "for",
        value: alert_for
      }, {
        name: "text",
        value: alert_text
      }, {
        name: "icon",
        value: alert_icon
      });

      // console.log(alert_array);

      elements = elements.add('<div class="alert ' + alert_type + '" id="' + alert_for + '"><div class="icon mr-4 tc-dark-contrast"> <i class="' + alert_icon + '"></i></div><p class="tc-dark-contrast">' + alert_text + '</p><div class="btn-icon btn-sm btn-red ml-auto close-alert"><div class="icon"> <i class="far fa-times"></i></div></div></div>');
      $('body').append(elements);

      $(item).on('click', function () {
        $('.alert#' + alert_for).css({
          top: 100 * ++n_click,
        })
        $('.alert#' + alert_for).addClass('active');

        setTimeout(function () {
          close_alert($('.alert#' + alert_for));
          n_click = $('.alert.active#' + alert_for).length;
        }, 2000);
      })
    })

    $('.close-alert').click(function () {
      close_alert($(this).parent());
      n_click = 0;
    })

    // how to use alert
    // add class 'show_alert' to any element
    // then add >> data-alert="default" data-alert-for="alert-for" data-alert-text="text here" data-alert-icon="fas fa-exclamation-circle"
  }

  if ($('.img-frame')[0]) {

    var image_frame = $('.img-frame');

    $.each(image_frame, function (index, item) {

      var shadow_radius = $(item).data('blur'),
        img_shadow = $(item).children('.img-shadow');

      img_shadow.blurjs({
        customClass: 'blurjs',
        radius: shadow_radius,
        persist: false
      });
      console.log(shadow_radius);
    })
    $
  }

  if ($('.aspect_ratio')[0]) {
    // Set aspect ratio of .box
    var aspect_ratio = $('.aspect_ratio');

    // Store the jQuery object for future reference
    $.each(aspect_ratio, function (index, item) {
      var $box = $(item),
        aspect_ratio_number = $(item).data('ratio');

      // Initial resize of .box
      $(document).ready(function ($) {
        $box.height($box.width() * aspect_ratio_number);
      });

      // Resize .box on browser resize
      $(window).resize(function () {
        $box.height($box.width() * aspect_ratio_number);
      });
    })
  }

  if ($('.scroll_to')[0]) {

    var scroll_to = $('.scroll_to');

    $.each(scroll_to, function (index, item) {

      var $this = $(item),
        scroll_to = $this.data('scroll-to');

      $this.click(function (e) {
        e.preventDefault();

        $('html, body').animate({
          scrollTop: $("." + scroll_to).offset().top
        }, 500);

      });
    })
  }

  if ($('.tab')[0]) {
    // -=-=-=-=-=-=-=-=- TAB -=-=-=-=-=-=-=-=-
    const th = document.querySelector(".tab-header");
    let isDown = false;
    let startX;
    let scrollLeft;

    $(".tab").on("mouseover", function () {
      th.addEventListener("mousedown", (e) => {
        isDown = true;
        th.classList.add("active");
        startX = e.pageX - th.offsetLeft;
        scrollLeft = th.scrollLeft;
      });
      th.addEventListener("mouseleave", () => {
        isDown = false;
        th.classList.remove("active");
      });
      th.addEventListener("mouseup", () => {
        isDown = false;
        th.classList.remove("active");
      });
      th.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - th.offsetLeft;
        const walk = (x - startX) * 1; //scroll-fast
        th.scrollLeft = scrollLeft - walk;
        // console.log(walk);
      });
    });

    $(".tab .tab-header .tab-header-item").on("click", function (e) {
      e.preventDefault();
      $(this).addClass("active").siblings().removeClass("active");

      var item = $(this)
        .parent()
        .parent()
        .siblings(".tab-content")
        .children(".result-wrapper")
        .children(".row")
        .children(".col")

      TweenLite.set(item, {
        y: 25,
        opacity: 0,
      });

      var tl = new TimelineLite();
      tl.staggerTo(
        item,
        0.5,
        {
          y: 0,
          opacity: 1,
          ease: Back.easeOut,
        },
        0.05
      );
    });

    $(".tab .dropdown-body .dropdown-item").on("click", function (e) {
      e.preventDefault();

      var item = $(this)
        .parent()
        .parent()
        .parent()
        .parent()
        .siblings(".tab-content")
        .children(".result-wrapper")
        .children(".row")
        .children(".col")

      TweenLite.set(item, {
        y: 25,
        opacity: 0,
      });

      var tl = new TimelineLite();
      tl.staggerTo(
        item,
        0.5,
        {
          y: 0,
          opacity: 1,
          ease: Back.easeOut,
        },
        0.05
      );
    });
    // -=-=-=-=-=-=-=-=- TAB - - - END -=-=-=-=-=-=-=-=-
  }

  if ($('.complex-preload')[0]) {
    $('#hide_complex_preload').click(function () {
      $('.complex-preload').addClass('hide');
    })

    $('body').on('DOMMouseScroll mousewheel', function (e) {
      if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
        $('.complex-preload').addClass('hide');
        $('.close-box.box-2').addClass('hide');
        clearTimeout(timer);
        // setTimeout(function() {
        //   $('.close-box.box-2').removeClass('hide');
        // }, 2000);
      }
      // return false;
    });
  }

  if ($('.hashtag')[0]) {
    // -=-=-=-=-=-=-=-=- SCROLL HORIZONTAL EFFECT ON SCROLL -=-=-=-=-=-=-=-=-
    $(document).on("scroll", function () {
      if (Modernizr.mq('(min-width: 768px) and (max-width: 1024px)')) {
        $(".hashtag").css("left", Math.max(50 - 0.35 * window.scrollY));
      } else {
        $(".hashtag").css("left", Math.max(12 - 0.35 * window.scrollY));
      }
    })

    var lastY;
    $(document).bind('touchmove', function (e) {
      var currentY = e.touches[0].clientY;
      if (currentY !== lastY) {
        // moved vertically
        return;
      }
      lastY = currentY;
      if (Modernizr.mq('(min-width: 768px) and (max-width: 1024px)')) {
        $(".hashtag").css("left", Math.max(50 - 0.35 * lastY))
      } else {
        $(".hashtag").css("left", Math.max(12 - 0.35 * lastY))
      }
      console.log(lastY);
      //insert code if you want to execute something when an horizontal touchmove is made
    });
    // -=-=-=-=-=-=-=-=- SCROLL HORIZONTAL EFFECT ON SCROLL - - - END -=-=-=-=-=-=-=-=-
  }

  // -=-=-=-=-=-=-=-=- VIDEO TOGGLE -=-=-=-=-=-=-=-=-
  if ($('.video-toggle')[0]) {

    $('.video-toggle').click(function () {
      $(this).parent().parent().addClass('video-active');
    })
  }

  if ($('.video-js')[0]) {

    var player = videojs('example_video_1');
    player.on('pause', function () {
      if (!player.seeking()) {
        $('.video-toggle').parent().parent().removeClass('video-active');
        console.log('PAUSE');
      }
    });
  }

  if ($('.btn-close-video')[0]) {

    $('.btn-close-video').click(function () {
      player.pause();
      $('.video-toggle').parent().removeClass('video-active');
      console.log('PAUSE');
    })
  }
  // -=-=-=-=-=-=-=-=- VIDEO TOGGLE - - - END -=-=-=-=-=-=-=-=-


  // -=-=-=-=-=-=-=-=- FULLMENU TOGGLE -=-=-=-=-=-=-=-=-
  $(".fullmenu_toggle").click(function () {

    fmId = $(this).attr("id");
    if (fmId == 'fm-menu') {
      $(".navbar").toggleClass("fm-menu-active").removeClass("fm-search-active");
      $(".fullmenu.fm-menu").toggleClass('active');
      $(".fullmenu.fm-search").removeClass('active');
    } else {
      $(".navbar").toggleClass("active");
      $(".fullmenu." + fmId).toggleClass("active");
    }

    // $(".fullmenu." + fmId).toggleClass("active");
  });

  // ADDITIONAL : IBOOK WIDGET TOGGLE CLASS
  var ibook_open = false;
  $("#toggle_ibook").click(function () {
    $(this).toggleClass('active');
    $("#ibooking-widget").toggleClass('active');
    var ibooking_w_h = $('#ibooking-widget').height();

    if (ibook_open) {
      $(this).animate({ "bottom": "0" }, 32);
      ibook_open = false;
    } else {
      $(this).animate({ "bottom": ibooking_w_h }, 32);
      ibook_open = true;
    }
  });
  // -=-=-=-=-=-=-=-=- FULLMENU TOGGLE - - - END -=-=-=-=-=-=-=-=-


  // -=-=-=-=-=-=-=-=- FULLMENU ITEM DROPDOWN -=-=-=-=-=-=-=-=-
  $(".fm-d-title").click(function () {
    // if ($('.fm-dropdown')[0]) {
    // 	$(".fm-dropdown").toggleClass("active");
    // }

    // fmId = $(this).attr("id");
    $(this).parent().toggleClass("active");
    $(this).parent().siblings('.fm-dropdown').removeClass("active");
  });
  // -=-=-=-=-=-=-=-=- FULLMENU ITEM DROPDOWN - - - END -=-=-=-=-=-=-=-=-


  // -=-=-=-=-=-=-=-=- ADD CLASS TO NAV ON SCROLL -=-=-=-=-=-=-=-=-
  $(function () {

    var nav = $(".navbar");
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();

      if (scroll >= 100) {
        nav.addClass("scroll-active");
      } else {
        nav.removeClass("scroll-active");
      }
    });
  });
  // -=-=-=-=-=-=-=-=- ADD CLASS TO NAV ON SCROLL - - - END -=-=-=-=-=-=-=-=-


  // TRANSISI HALAMAN
  $('.make_transition').click(function (e) {
    { (e) => dragging && e.preventDefault() }
    $('.close-box').addClass('on');
    var gotoPage = $(this).attr('id');
    e.preventDefault(); //will stop the link href to call the blog page

    setTimeout(function () {
      window.location.href = gotoPage; //will redirect to your blog page (an ex: blog.html)
    }, 2000); //will call the function after 2 secs.
  });
  // TRANSISI HALAMAN - - - END


})