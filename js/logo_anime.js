function logoAnimeInit($) {
	var logo = 	$("div.logo"),
		imgs = logo.find ("img");

	logo.on ("mouseenter", function(){
		imgs.each( function(i){
			if (i!=0&&i!=6){
				$(this).animate ({ left: (-10*i), top : (4*i), opacity : 0 }, 300, "swing", function(){
					$(this).animate ( { left: 0, top : 0, opacity : 1 }, 300, "swing")
				})
			}


		})


	})




};