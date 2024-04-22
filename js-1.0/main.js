$(document).ready(function () {
  // -=-=-=-=-=-=-=-=- DIFFERENT BUILD FOR MOBILE AND DEKSTOP -=-=-=-=-=-=-=-=-
  if (
    !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    // -=-=-=-=-=-=-=-=- NICE SCROLL -=-=-=-=-=-=-=-=-
    $("html").niceScroll({
      cursorcolor: "#6E7179", // change cursor color in hex
      cursorborder: "0px solid #FFF", // css definition for cursor border
      railpadding: {
        top: 0,
        right: 3,
        left: 0,
        bottom: 0,
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

    // -=-=-=-=-=-=-=-=- POSITION STICKY DETECTOR -=-=-=-=-=-=-=-=-
    if ($(".pos-sticky")[0]) {
      $("body").css({
        overflow: "visible",
      });
    }
  } else {
    $("body").attr("id", "mobile");
  }
  // -=-=-=-=-=-=-=-=- DIFFERENT BUILD FOR MOBILE AND DEKSTOP - - - END -=-=-=-=-=-=-=-=-

  // -=-=-=-=-=-=-=-=- IMAGE LAZINESS -=-=-=-=-=-=-=-=-
  if ($(".lazy")[0]) {
    $(".lazy").lazy();
  }

  // -=-=-=-=-=-=-=-=- SCROLL TO FUNCTION -=-=-=-=-=-=-=-=-
  if ($(".scroll_to")[0]) {
    var scroll_to = $(".scroll_to");

    $.each(scroll_to, function (index, item) {
      var $this = $(item),
        scroll_to = $this.data("scroll-to"),
        scroll_offset = $this.data("scroll-offset");

      function scroll_init($item, $o) {
        $item.click(function (e) {
          e.preventDefault();

          $("html, body").animate(
            {
              scrollTop: $("." + scroll_to).offset().top - $o,
            },
            1200
          );
        });
      }

      if ($this.is("[data-scroll-offset]")) {
        scroll_init($this, scroll_offset);
        console.log("has specs");
      } else {
        scroll_init($this, 0);
        console.log("no specs");
      }
    });

    // HOW TO USE
    // <div class="this_section"></div>
    // ...
    // <div class="scroll_to" data-scroll-to="this_section" data-scroll-offset="0"></div>
  }

  // -=-=-=-=-=-=-=-=- SLIDER -=-=-=-=-=-=-=-=-
  if ($(".slider")[0]) {
    var slider = $(".slider"),
      slider_array = [];

    $.each(slider, function (index, item) {
      var children_length = $(item).children(".row").children().length,
        slider_min = $(item).data("minimum"),
        slider_min_m = $(item).data("minimum-m"),
        slider_min_t = $(item).data("minimum-t"),
        slider_type = $(item).data("type");

      slider_array.push(
        {
          name: "minimum",
          value: slider_min,
        },
        {
          name: "type",
          value: slider_type,
        }
      );

      if (slider_type == "responsive") {
        if (children_length >= slider_min) {
          $(item).addClass("responsive-slider-activated");

          // -=-=-=-=-=-=-=-=- SLIDER - - - START -=-=-=-=-=-=-=-=-
          if ($(item).hasClass("index-product-slider")) {
            var slideCount = null;

            $(".index-product-slider .row")
              .on("init", function (event, slick) {
                slideCount = slick.slideCount;
                setSlideCount();
                setCurrentSlideNumber(slick.currentSlide);
              })
              .on(
                "beforeChange",
                function (event, slick, currentSlide, nextSlide) {
                  setCurrentSlideNumber(nextSlide);
                }
              )
              .slick({
                slidesToScroll: 1,
                slidesToShow: slider_min,
                // variableWidth     : true,
                dots: false,
                infinite: false, // true
                autoplay: false, // true
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
              var $el = $("#slide-count-wrap").find("#total");
              $el.text(slideCount);
            }

            function setCurrentSlideNumber(currentSlide) {
              var $el = $("#slide-count-wrap").find("#current");
              $el.text(currentSlide + 1);
            }
          } else if ($(item).hasClass("index-testimonial-slider")) {
            $(".index-testimonial-slider .row")
              .on("init", function (event, slick) {})
              .on(
                "beforeChange",
                function (event, slick, currentSlide, nextSlide) {}
              )
              .on("afterChange", function (event, slick) {})
              .slick({
                slidesToScroll: 1,
                slidesToShow: slider_min,
                dots: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 3200,
                touchThreshold: 100,
                centerMode: false,
                arrows: true, // true
                appendArrows: $(".testimonial_navigations"),
                prevArrow:
                  '<div class="navigation-btn btn-prev w-10 h-10 bd-rs-5 bg-dark/25 tc-dark p-lg d-flex ai-center jc-center cur-p mr-4"><i class="far fa-arrow-left"></i></div>',
                nextArrow:
                  '<div class="navigation-btn btn-next w-10 h-10 bd-rs-5 bg-dark/25 tc-dark p-lg d-flex ai-center jc-center cur-p"><i class="far fa-arrow-right"></i></div>',
                responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      // infinite: true,
                      // dots: true
                    },
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                    },
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                    },
                  },
                ],
              });

            // let slider = $(".index-testimonial-slider");
            // $(".testimonial_navigations")
            //   .children()
            //   .click(function () {
            //     if ($(item).hasClass("btn-prev")) {
            //       slider.slick("slickPrev");
            //     } else {
            //       slider.slick("slickNext");
            //     }
            //   });
          } else if ($(item).hasClass("marquee-slider")) {
            $(".marquee-slider .row").slick({
              speed: 3200,
              autoplay: true,
              autoplaySpeed: 0,
              centerMode: true,
              cssEase: "linear",
              slidesToShow: slider_min,
              slidesToScroll: 1,
              variableWidth: true,
              infinite: true,
              initialSlide: 1,
              arrows: false,
              buttons: false,
            });
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
      } else if (slider_type == "mobile") {
        if (Modernizr.mq("(min-width: 768px)")) {
          // if (children_length >= slider_min_t) {
          //   if ($(item).hasClass('slider-card-1')) {
          //     $(item).children(".row").slick({
          //       infinite: true,
          //       autoplay: true,
          //       autoplaySpeed: 8000,
          //       centerPadding: '0',
          //       slidesToShow: slider_min_t,
          //       dots: false,
          //       prevArrow: '<div class="slide-btn btn-prev"></div>',
          //       nextArrow: '<div class="slide-btn btn-next"></div>',
          //       nextArrow: false,
          //       prevArrow: false,
          //       touchThreshold: 100,
          //       beforeChange: () => dragging = true,
          //       afterChange: () => dragging = false,
          //       // responsive: [
          //       //     {
          //       //         breakpoint: 1100,
          //       //         settings: {
          //       //             slidesToShow: 4,
          //       //         }
          //       //     },
          //       // ]
          //     });
          //   }
          // }
        } else {
          // if (children_length >= slider_min_m) {
          //   if ($(item).hasClass('slider-card-1')) {
          //     $(item).children(".row").slick({
          //       infinite: true,
          //       autoplay: true,
          //       autoplaySpeed: 8000,
          //       centerPadding: '0',
          //       slidesToShow: slider_min_m,
          //       dots: false,
          //       prevArrow: '<div class="slide-btn btn-prev"></div>',
          //       nextArrow: '<div class="slide-btn btn-next"></div>',
          //       nextArrow: false,
          //       prevArrow: false,
          //       touchThreshold: 100,
          //       beforeChange: () => dragging = true,
          //       afterChange: () => dragging = false,
          //     });
          //   }
          // }
        }
      }
    });
  }
  // -=-=-=-=-=-=-=-=- SLIDER - - - END -=-=-=-=-=-=-=-=-

  // -=-=-=-=-=-=-=-=- OVERLAY TOGGLE -=-=-=-=-=-=-=-=-
  $(".overlay_toggle").click(function () {
    const target_id = $(this).data("overlay-target");

    $(`.overlay.` + target_id).toggleClass("active"); 

    if (target_id == "fullmenu") {
      $('.navbar').toggleClass("fullmenu-active");
    }
  });
  // -=-=-=-=-=-=-=-=- OVERLAY TOGGLE - - - END -=-=-=-=-=-=-=-=-

  // -=-=-=-=-=-=-=-=- MAKE TRANSITION -=-=-=-=-=-=-=-=-
  $(".make_transition").click(function (e) {
    $(".overlay").removeClass("active");

    // {
    //   (e) => dragging && e.preventDefault();
    // }
    $(".transition").addClass("closing").removeClass("off");
    var gotoPage = $(this).data("transition-to");
    e.preventDefault(); //will stop the link href to call the blog page

    setTimeout(function () {
      window.location.href = gotoPage; //will redirect to your blog page (an ex: blog.html)
    }, 1500); //will call the function after 2 secs.
  });

  // HOW TO USE
  // <div class="make_transition cur-p" id="example" data-transition-to="{{ url('/example') }}">example</div>
  // -=-=-=-=-=-=-=-=- MAKE TRANSITION - - - END -=-=-=-=-=-=-=-=-

  // -=-=-=-=-=-=-=-=- TAB -=-=-=-=-=-=-=-=-
  if ($(".tab")[0]) {
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
        .siblings(".tab-content")
        .children(".result-wrapper")
        .children(".row")
        .children(".col");

      // console.log(">>> ", item);

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
        .children(".col");

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
  }
  // -=-=-=-=-=-=-=-=- TAB - - - END -=-=-=-=-=-=-=-=-

  // -=-=-=-=-=-=-=-=- ADD CLASS ON SCROLL : ON -=-=-=-=-=-=-=-=-
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
  // -=-=-=-=-=-=-=-=- ADD CLASS ON SCROLL - - - END -=-=-=-=-=-=-=-=-
});
