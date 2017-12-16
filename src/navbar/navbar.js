$(".nav__gamburger").click(function() {
	$(".nav__menu").animate({
		left: "+=250"
	},100)
	$(".nav__menu-li-opacty").css("width", "250%");
})

$(".nav__menu-li-opacty").click(function() {
	$(".nav__menu").animate({
		left: "-=250"
	},100)
	$(".nav__menu-li-opacty").css("width", "0");
})