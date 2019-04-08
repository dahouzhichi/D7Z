document.ready = function(){
$(".first").click(function(){
	$(".first a").css("color","skyblue");
	$("#scroll a").css("color","black");
	$(window).scrollTop(0);
})
 var r = window.location.search;
 console.log(r.substr(10));
 if (r.substr(10) == "scroll") {
 	console.log(1);
 	scr();
}
	$("#scroll").click(function(){
		$(".first a").css("color","black");
		$("#scroll a").css("color","skyblue");
		$(window).scrollTop(470);
		console.log($(window));
		console.log($(window).scrollTop());
	})
function scr(){
	$(".first a").css("color","black");
		$("#scroll a").css("color","skyblue");
		$(window).scrollTop(470);
		console.log($(window));
		console.log($(window).scrollTop());
}
}