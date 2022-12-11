// $('.btn').on('click', function(e) {
// 	$('.nav').toggleClass('is-active');
// })
$('.header-burger').on('click', function(e) {
  $('.header-wrapper').toggleClass('is-active');
})
$('#nav-icon3').click(function(){
    $(this).toggleClass('open');
});


$('.section-slids').slick({
	dots: true,
	arrows: false,
});
$('.clients-sliders').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplaySpeed: 0,
  autoplay: true,
  speed: 4000,
  infinite: true,
  arrows: false,
  variableWidth: true,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 590,
      settings: {
        slidesToShow: 5
      }
    }
  ]
});
 $(".click-tabs" ).tabs();

 $('.video-button').click(function(event) {
    event.preventDefault();
    $(".modal").modal({
      fadeDuration: 100,
      showClose: false
    });
});
