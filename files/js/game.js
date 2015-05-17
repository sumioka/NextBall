(function($){

	$('#kind,#course').on('click',function() {

		$(this).find('.off').hide();
		$(this).find('.on').show();

	});
	
	return false;
	
})(jQuery);