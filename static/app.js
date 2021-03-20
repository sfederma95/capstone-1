$('#add-anime').on('click', function() {
	$('.waitpage').show();
});

$('.genre').on('click', function() {
	$('.waitpage').show();
});

$('#search').on('click', function() {
	$('.waitpage').show();
});

$('.recommended').on('click', function() {
	$('.waitpage').show();
});

$('button.update-button').on('click', function() {
	$(this).siblings().attr('hidden', false);
	$(this).attr('hidden', true);
});

$('.list-collapse').on('click', function() {
	$('.update-entry').attr('hidden',true)
	$('.update-button').attr('hidden',false)
});

function categorySelect() {
	// from https://stackoverflow.com/questions/2683794/jquery-selectors-where-item-does-not-have-children-with-a-certain-class
	let category = $(this).attr('id');
	let notCategory = $('.listed-anime').filter(function() {
		return !$(this).find('span').is(`.${category}`);
	});
	notCategory.attr('hidden', true);
	$(`span.${category}`).parents('.listed-anime').attr('hidden', false);
}

$('button.category-select').on('click', categorySelect);

$('#clear-filter').on('click', function() {
	$('.listed-anime').attr('hidden', false);
});

$('.spoiler-toggle').on('click', function() {
	$(this).next().toggleClass('spoiler');
});
