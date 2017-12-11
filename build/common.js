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
$(".filter__sort-list > .filter__sort-list-item").click(function() {
	$(this).addClass("filter__sort-list-item_active").siblings().removeClass("filter__sort-list-item_active")
})

$(".filters__list > .filters__list-item").click(function() {
	$(".filters__list-item").eq(0).css("background", "#1BAF5D");
})

/*

При нажатии на .filter__sort-list-item соответствующая запись
должна меняться в цвете

То же самое касается .filters__list-item

*/

/*


$(".filters__list > .filters__list-item").click(function() {
	$(this).eq(1).css("background", "#1BAF5D");
})

$(".filters__list-item").click(function() {
	$(this).eq(1).css("background", "#1BAF5D");
})

В чём отличие эттих зписей?

*/

/*

Нажимая .loadmore срабатывает механизм бесконечной ленты

*/
/*

При нажатии на .nav__search должно выдвигаться поле для ввода

При нажатии на юnav__login-a должно появляться всплывающее окно

*/
// Создаём массив с елементами DOM-дерева, которым присвоен .paragraphs__item
var $set = $('.paragraphs__item');
$('.paragraphs').on('click', '.paragraphs__item', function () {
	// Мы должны узнать под каким номером, то есть index
	// будет у этого, то есть this, DOM-элемента
	var n = $set.index(this);
	$(".slide").eq(n).addClass("slide_visible").siblings().removeClass("slide_visible")
});

$(".paragraphs__item").click(function() {
	var background = $(this).css("background-image");
	var backgroundString = String(background);
	var backgroundStringEnd = backgroundString.slice(0, -6);
	var backgroundActive = backgroundStringEnd + "-active.png";
	$(this).css("background-image", backgroundActive).siblings().css("background-image", function(i, val) {
		var a = $(this).css("background-image").slice(-13);
		if($(this).css("background-image").slice() == '-active.png")') {
			$(this).css("background-image").slice(0, -13) + '.png")'
		}
	})
})


/*
Просто слайдер
Хочу построить его без использования идентификаторов
*/

/*

Когда наводим на соответствующую звёздочку справа, то срабатывает спрайт

*/
