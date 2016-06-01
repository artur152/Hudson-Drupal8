

(function ($, Drupal) {

    Drupal.behaviors.BannerSlider = {
        attach: function (context, settings) {

            /* Slider Banner*/
            $('.slick-slider.primary').once('BannerSlider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 4000,
                speed: 800,
                fade: true,
                cssEase: 'ease-in-out',
                pauseOnHover: true,
                focusOnSelect: false,
                swipeToSlide: true,
                infinite: true,
                arrows: true,
                dots: true,
                centerMode: false,
                adaptiveHeight: false
            });

            /* Slider secondary*/
            $('.slick-slider.secondary').once('BannerSlider1').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 3000,
                speed: 800,
                fade: false,
                pauseOnHover: true,
                focusOnSelect: false,
                swipeToSlide: true,
                infinite: true,
                arrows: true,
                adaptiveHeight: true
                //dots: true,
                //,asNavFor: '#carousel'
            });
            //$('#carousel').slick({
            //    slidesToShow: 3,
            //    slidesToScroll: 1,
            //    swipeToSlide: true,
            //    asNavFor: '.slick-slider.secondary',
            //    centerMode: true,
            //    focusOnSelect: true
            //});
        }
    };


})(jQuery, Drupal);


//(function myF (alarm){
//    alert(alarm);
//})(aaa);