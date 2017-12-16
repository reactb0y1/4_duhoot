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