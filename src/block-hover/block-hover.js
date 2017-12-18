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

// $(".block-hover__stars").

/*
1 - 0 0
2 - 0 -16
3 - 0 -32
4 - 0 -48
5 - 0 -64
*/
// var x = e.pageX;
// starsWidth % starWidth = 0
/*
$(".block-small").mousemove(function(e) {
	var positionLeftBlock = $(this).offset().left;
	console.log(positionLeftBlock)
})*/


/*$('.block-hover > .block-hover__stars').mousemove(function(e){

	// Узнаём позицию этого элемента относительно родителя
	var positionLeftStars = $(this).position().left;
	// 
	var positionCursor = positionLeftStars - 39.5;
	var starsWidth = $(".block-hover__stars").width();
	var starWidth = starsWidth / 5;

	if(positionCursor > starWidth) {

		console.log(starWidth);

	}
});*/


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
/*
	if (cursorStars < starWidth) {
		$(this).addClass("block-hover__star_1")
	} else if (cursorStars < starWidth * 2) {
		$(this).addClass("block-hover__star_2")
	} else if (cursorStars < starWidth * 3) {
		$(this).addClass("block-hover__star_3")
	} else if (cursorStars < starWidth * 4) {
		$(this).addClass("block-hover__star_4")
	} else if (cursorStars < starWidth * 5) {
		$(this).addClass("block-hover__star_5")
	}*/

	console.log("Ширина элемента - " + starWidth);
	console.log("Относительно левого края элемента - " + cursorStars);
});