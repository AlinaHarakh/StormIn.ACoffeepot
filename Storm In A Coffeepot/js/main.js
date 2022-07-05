$(function () {
	$('.header__slider').slick({
		dots: true,
		arrows: false,
		slidesToShow: 2,
		// autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	$('.menu__burger').on('click', function () {
		$('.menu__list').toggleClass('menu__list--active');
		$(this).toggleClass("open");
	});
});
