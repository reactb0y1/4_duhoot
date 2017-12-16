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

$(".filters__list-item").eq(0).click(function() {
	$(".filters__list-item").eq(0).toggleClass("filters__list-item_home");
})

$(".filters__list-item").eq(1).click(function() {
	$(".filters__list-item").eq(1).toggleClass("filters__list-item_human");
})

$(".filters__list-item").eq(2).click(function() {
	$(".filters__list-item").eq(2).toggleClass("filters__list-item_cap");
})

$(".filters__list-item").eq(3).click(function() {
	$(".filters__list-item").eq(3).toggleClass("filters__list-item_melody");
})

$(".filters__list-item").eq(4).click(function() {
	$(".filters__list-item").eq(4).toggleClass("filters__list-item_auto");
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

var mainLine = '<div class="main__line"><div class="block-small"><div class="block-hover block-hover_home"><button class="show-more show-more_home"><img src="../resource/images/show-more__ico.png" alt="" class="show-more__ico"><span class="show-more__text">Show more</span></button><div class="block-hover__stars"></div><div class="block-hover__comments"></div></div><img src="../resource/images/block-small__img1.png" alt="" class="block-small__img"><p class="block-small__price block-small__price_home">$2,250</p><div class="block-small__separ block-small__separ_home"><span class="block-small__circle block-small__circle_home"></span></div><div class="block-info block-info_small"><p class="block-info__text">2 bedroom house for rent in Dubai</p><p class="block-info__name block-info__name_home">Vision Agency</p><div class="block-info__raiting"><img src="../resource/images/block-small__stars.png" alt="" class="block-info__stars"><span class="block-info__quantity">(365)</span></div></div></div><div class="block-small"><div class="block-hover block-hover_melody"><button class="show-more show-more_melody"><img src="../resource/images/show-more__ico.png" alt="" class="show-more__ico"><span class="show-more__text">Show more</span></button><div class="block-hover__stars"></div><div class="block-hover__comments"></div></div><img src="../resource/images/block-small__img1.png" alt="" class="block-small__img"><p class="block-small__price block-small__price_melody">$2,250</p><div class="block-small__separ block-small__separ_melody"><span class="block-small__circle block-small__circle_melody"></span></div><div class="block-info block-info_small"><p class="block-info__text">2 bedroom house for rent in Dubai</p><p class="block-small__name block-small__name_melody">Vision Agency</p><div class="block-info__raiting"><img src="../resource/images/block-small__stars.png" alt="" class="block-info__stars"><span class="block-info__quantity">(365)</span></div></div></div><div class="block-small"><div class="block-hover block-hover_auto"><button class="show-more show-more_auto"><img src="../resource/images/show-more__ico.png" alt="" class="show-more__ico"><span class="show-more__text">Show more</span></button><div class="block-hover__stars"></div><div class="block-hover__comments"></div></div><img src="../resource/images/block-small__img1.png" alt="" class="block-small__img"><p class="block-small__price block-small__price_auto">$2,250</p><div class="block-small__separ block-small__separ_auto"><span class="block-small__circle block-small__circle_auto"></span></div><div class="block-info block-info_small"><p class="block-info__text">2 bedroom house for rent in Dubai</p><p class="block-small__name block-small__name_auto">Vision Agency</p><div class="block-info__raiting"><img src="../resource/images/block-small__stars.png" alt="" class="block-info__stars"><span class="block-info__quantity">(365)</span></div></div></div><div class="block-small"><div class="block-hover block-hover_home"><button class="show-more show-more_home"><img src="../resource/images/show-more__ico.png" alt="" class="show-more__ico"><span class="show-more__text">Show more</span></button><div class="block-hover__stars"></div><div class="block-hover__comments"></div></div><img src="../resource/images/block-small__img1.png" alt="" class="block-small__img"><p class="block-small__price block-small__price_home">$2,250</p><div class="block-small__separ block-small__separ_home"><span class="block-small__circle block-small__circle_home"></span></div><div class="block-info block-info_small"><p class="block-info__text block-info__text_small">2 bedroom house for rent in Dubai</p><p class="block-small__name block-info__name_home">Vision Agency</p><div class="block-info__raiting"><img src="../resource/images/block-small__stars.png" alt="" class="block-info__stars"><span class="block-info__quantity">(365)</span></div></div></div></div>'
/*
$(".loadmore").click(function() {
	$(".loadmore").before(mainLine)
})*/

$(".loadmore").on("click", "div", function() {
	$(".loadmore").before(mainLine)
})



/*

Нажимая .loadmore срабатывает механизм бесконечной ленты

*/
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

