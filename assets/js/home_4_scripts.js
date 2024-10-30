$(function () {

    // ------------ team images width same height -----------
    // var images = $(".tc-team-style1 .team-card .img, .img_sm_h");
    // images.each(function () {
    //   var width = $(this).width();
    //   $(this).height(width);
    // });


});


// ------------ swiper sliders -----------
$(document).ready(function () {


    // ------------ tc-header-slider1 -----------
    var swiper = new Swiper('.tc-header-st4 .header-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        // effect: "fade",
        // direction: "vertical",
        centeredSlides: true,
        parallax: true,
        speed: 1500,
        pagination: {
            el: '.tc-header-st4 .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.tc-header-st4 .swiper-button-next',
            prevEl: '.tc-header-st4 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 6000,
        },
        loop: false,
        on: {
            init: function () {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    $(swiper.slides[i])
                        // .find(".img")
                        .attr({
                            "data-swiper-parallax": 0.75 * swiper.width,
                        });
                }
            },
            resize: function () {
                this.update();
            },
        },
    });


    // ------------ tc-header-slider1 -----------
    var swiper = new Swiper('.tc-dishes-st4 .dishes-slider', {
        slidesPerView: 3,
        spaceBetween: 90,
        centeredSlides: true,
        speed: 1500,
        pagination: {
            el: '.tc-dishes-st4 .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.tc-dishes-st4 .swiper-next',
            prevEl: '.tc-dishes-st4 .swiper-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });


    // ------------ tc-header-slider1 -----------
    var swiper = new Swiper('.tc-products-st4 .products-slider', {
        slidesPerView: 4,
        spaceBetween: 90,
        // centeredSlides: true,
        speed: 1500,
        pagination: {
            el: '.tc-products-st4 .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.tc-products-st4 .swiper-next',
            prevEl: '.tc-products-st4 .swiper-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });


    // ------------ menu slider -----------
    var swiper = new Swiper('.tc-menu-st4 .menu-slider', {
        slidesPerView: 1,
        spaceBetween: 24,
        // centeredSlides: true,
        direction: "vertical",
        speed: 1000,
        pagination: {
            el: '.tc-menu-st4 .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.tc-menu-st4 .swiper-next',
            prevEl: '.tc-menu-st4 .swiper-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: false,
        // autoplay: {
        //     delay: 5000,
        // },
        loop: false,
    });


    // ------------ services slider -----------
    var swiper = new Swiper('.tc-testimonials-st4 .testimonials-slider', {
        // slidesPerView: 5,
        spaceBetween: 30,
        // centeredSlides: true,
        speed: 1500,
        pagination: {
            el: '.tc-testimonials-st4 .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.tc-testimonials-st4 .swiper-next',
            prevEl: '.tc-testimonials-st4 .swiper-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });
    // ------------ services slider -----------
    var swiper = new Swiper('.tc-instagram-st3 .instagram-slider', {
        // slidesPerView: 5,
        spaceBetween: 15,
        // centeredSlides: true,
        speed: 5000,
        autoplay: true,
        pagination: {
            el: '.tc-instagram-st3 .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.tc-instagram-st3 .swiper-next',
            prevEl: '.tc-instagram-st3 .swiper-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 0,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 5,
            }
        }
    });

    // ------------ blog slider -----------
    var swiper = new Swiper('.tc-blog-st4 .posts-slider', {
        slidesPerView: 5,
        spaceBetween: 24,
        // centeredSlides: true,
        speed: 1000,
        pagination: {
            el: '.tc-blog-st4 .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.tc-blog-st4 .swiper-next',
            prevEl: '.tc-blog-st4 .swiper-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });


});





 /*===========================================
	=         Mobile Menu Active         =
    =============================================*/

    console.clear();

    const app = (() => {
      let body;
      let menu;
      let menuItems;
      
      const init = () => {
        body = document.querySelector('body');
        menu = document.querySelector('.menu-icon');
        menuItems = document.querySelectorAll('.nav__list-item');
    
        applyListeners();
      }
      
      const applyListeners = () => {
        menu.addEventListener('click', () => toggleClass(body, 'nav-active'));
      }
      
      const toggleClass = (element, stringClass) => {
        if(element.classList.contains(stringClass))
          element.classList.remove(stringClass);
        else
          element.classList.add(stringClass);
      }
      
      init();
    })();




    $(window).scroll(function(){
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
    });