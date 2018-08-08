function filmInit ($) {
	var film = $("div#film"),
		frames = film.find("img");

		film.show();
		film.animate({opacity : 1}, 300, "swing", function(){
			frames.each (function(i){
			if (i===0)
			{
				$(this).animate ({opacity : 1}, 50, "swing", function(){
					$(this).animate ({opacity : 0}, 50, "swing")
				})
			} else if (i===1)
			{
				$(this).animate ({opacity : 1}, 50, "swing", function(){
					$(this).animate ({opacity : 0}, 50, "swing")
				})
	
			} else if (i===2)
			{
				$(this).animate ({opacity : 1}, 50, "swing", function(){
					$(this).animate ({opacity : 0}, 50, "swing")
				})
	
			} else if (i===3)
			{
				$(this).animate ({opacity : 1}, 50, "swing", function(){
					$(this).animate ({opacity : 0}, 1000, "swing")
				})
			}
			})	
		});
		
}