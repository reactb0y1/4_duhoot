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