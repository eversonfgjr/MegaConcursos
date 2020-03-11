$(function()
{
    $(document).on('click', '#adicionar-criterio-filtro-btn', function(e)
    {
        e.preventDefault();

        var controlForm = $('#collapseFiltro form:first'),
            currentEntry = $(this).parents('.criterio-div:first'),
            newEntry = $(currentEntry.clone()).appendTo(controlForm);

        newEntry.find('select').val('-1');
        controlForm.find('.entry:not(:last) .btn-add')
            .removeClass('btn-add').addClass('btn-remove')
            .removeClass('btn-success').addClass('btn-danger')
            .html('<span class="fas fa-plus"></span>');
    }).on('click', '.btn-remove', function(e)
    {
		$(this).parents('.entry:first').remove();

		e.preventDefault();
		return false;
	});
});

function myFunction() {
    $('.wjdTm').css('display','none');
}