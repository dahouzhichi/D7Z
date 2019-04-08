document.ready = function(){
$("#scroll").click(function(){
		location.href = "../首页/公共头部.html?username=scroll";
		$(".first a").css("color","black");
		$("#scroll a").css("color","skyblue");
	})
}