$(function(){
	$('.see').click(function(){
		$(this).parent().parent().siblings().toggle();
		if ($(this).parent().parent().siblings().css('display') == 'block') {
			$(this).parent().parent().css('background','blue');
			$(this).css('background-image','url('+'../images/see_on.png'+')');
		}else{
			$(this).parent().parent().css('background','white');
			$(this).css('background-image','url('+'../images/see.png'+')');
		}
	})
})