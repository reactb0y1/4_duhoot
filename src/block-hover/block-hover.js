// При наведении на .block-small__img сверху всплывает .block-hover
$(".block-small__img").hover(function () {
	$(this).prev().fadeIn(250);
	$(this).prev().css("display", "flex");
	$(this).next().fadeOut(250);
})

// Эффекты, когда убираем курсор
$(".block-hover").mouseleave(function() {
	$(".block-hover").fadeOut(250);
	$(".block-small__price").fadeIn(250);
})



$('.block-hover > .block-hover__stars').mouseup(function(e){
	// Положение элемента относительно левого края документа
	var positionLeftStars = $(this).offset().left;
	// Положение курсора относительно левого края документа
	var positionCursor = e.pageX;
	// Положение курсора относительно левого края элемента
	var cursorStars = Math.round(positionCursor - positionLeftStars);
	// Ширина этого элеента
	var starsWidth = $(this).width();
	// Ширина звёздочки этого элемента
	var starWidth = starsWidth / 5;

	if (cursorStars > 0 && cursorStars < starWidth) {
		$(this).css("backgroundPosition", "0 0")
	}
	if (cursorStars > starWidth * 1 && cursorStars < starWidth * 2) {
		$(this).css("backgroundPosition", "0 -16px")
	}
	if (cursorStars > starWidth * 2 && cursorStars < starWidth * 3) {
		$(this).css("backgroundPosition", "0 -32px")
	}
	if (cursorStars > starWidth * 3 && cursorStars < starWidth * 4) {
		$(this).css("backgroundPosition", "0 -48px")
	}
	if (cursorStars > starWidth * 4 && cursorStars < starWidth * 5) {
		$(this).css("backgroundPosition", "0 -64px")
	}

	console.log("Ширина элемента - " + starWidth);
	console.log("Относительно левого края элемента - " + cursorStars);
});