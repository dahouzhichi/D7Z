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
	$("#scroll").click(function(){
		location.href = "../首页/公共头部.html?username=scroll";
		$(".first a").css("color","black");
		$("#scroll a").css("color","skyblue");
	})
})