// Создаём массив с елементами DOM-дерева, которым присвоен .paragraphs__item
var $set = $('.paragraphs__item');
$('.paragraphs').on('click', '.paragraphs__item', function () {
	// Мы должны узнать под каким номером, то есть index
	// будет у этого, то есть this, DOM-элемента
	var n = $set.index(this);
	$(".slide").eq(n).addClass("slide_visible").siblings().removeClass("slide_visible")
});

// $(".paragraphs__item").click(function() {
// 	var background = $(this).css("background-image");
// 	var backgroundString = String(background);
// 	var backgroundStringEnd = backgroundString.slice(0, -6);
// 	var backgroundActive = backgroundStringEnd + "-active.png";
// 	$(this).css("background-image", backgroundActive).siblings().css("background-image", function(i, val) {
// 		var a = $(this).css("background-image").slice(-13);
// 		if($(this).css("background-image").slice() == '-active.png")') {
// 			$(this).css("background-image").slice(0, -13) + '.png")'
// 		}
// 	})
// })


/*
Просто слайдер
Хочу построить его без использования идентификаторов
*/