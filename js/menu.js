function menuInit ($) {
	var menu = $("div#menu").find("li");
	menu.on("click", function(){
		target = $(this).data("pos");

	



		$("body").animate ( { 
								"scrollTop" : $("#"+target).offset().top
							}, 2000);
	})
};