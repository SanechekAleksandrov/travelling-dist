$(function () {

   $('.header-slider__inner').slick({
      slidesToShow: 1,
      slidesToScroll:1,
      autoplay:true,
      autoplaySpeed: 3000,
      dots:true, 
      arrows: false,
      fade: true,
    });

    $('.reviews__slider').slick({
      slidesToShow: 1,
      slidesToScroll:1,
      autoplay:true,
      autoplaySpeed: 3000,
      dots:true, 
      fade: true,
      prevArrow:'<button type="button" class="slick-prev"><img src="images/reviews/arrow-left.svg" alt="arrow"></button>',
      nextArrow:'<button type="button" class="slick-next"><img src="images/reviews/arrow-right.svg" alt="arrow"></button>'
    });

    $('.visa__slider').slick({
      slidesToShow:4,
      slidesToScroll:1,
      autoplay:true,
      autoplaySpeed: 3000,
      prevArrow:'<button type="button" class="slick-prev"><img src="images/shengen/arrow-left.svg" alt="arrow"></button>',
      nextArrow:'<button type="button" class="slick-next"><img src="images/shengen/arrow-right.svg" alt="arrow"></button>',
      responsive: [
        {
        breakpoint: 1380,
        settings:{
          slidesToShow: 3,
          slidesToScroll:1,
        }
      },
      {
        breakpoint: 730,
        settings:{
          slidesToShow: 2,
          slidesToScroll:1,
        }
      },
      {
        breakpoint: 680,
        settings:{
          slidesToShow: 2,
          slidesToScroll:1,
        }
      },
      {
        breakpoint: 450,
        settings:{
          slidesToShow: 1,
          slidesToScroll:1,
        }
      }
    ]
    });



    $(".header-top a, .footer__rights-btn").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
      });

  $('.header-top__btn').on('click', function(){
    $('.header-nav').toggleClass('header-nav--active');
  });


  


























})