(function($){
	$('#gallery').on('click', '.like', function(e) {
		
		var $this = $(this);
		var $likeCount = parseInt($('.like-count').html());
		$likeCount++;
		$('.like-count').html($likeCount++);
		$this.parent().addClass('liked');
		$this.replaceWith("<span> Liked! </span>");
	});
})(jQuery);
