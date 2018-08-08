function sliderInit ($) {



	var current = 1;
	$("div#slider > button").on ("click", function() {
		var clicked = $( this ).children("img").attr ("alt"),
		    prev = current,
			hand_phone = $("div#hand_phone"),
			mac = $("div#mac"),
			macbook = $("div#macbook"),
			phone = $("div#phone"),
			ipad = $("div#ipad"),			
			slider = $("div#slider");




		if (clicked ==="right_arrow") {
			if (current===3) { current = 1}
				else { current++}
		} else if (clicked === "left_arrow") {
			if (current===1) {current=3} else {current-- }
		} 

		if (clicked==="right_arrow")
		{
			$("div#slide" + current).animate ({ opacity: 1 }, 1000, "swing" );
			$("div#slide" + prev).animate( {opacity: 0}, 1000, "swing");
			if (current===1)
			{
				slider.css("overflow", "visible");
				hand_phone.show();
				hand_phone.animate ( { top: 45 }, 1000);
			}
			if (current ===2)
			{
				hand_phone.animate ( { top: -700 }, 1000, "swing", function() {
					hand_phone.hide();	
				});
				slider.css("overflow", "hidden");
				mac.show();
				mac.animate ({top : 10}, 1000, "swing");
				macbook.show();
				macbook.animate ({left : 570} , 1000, "swing");
				phone.show();
				phone.animate ({top : 240 }, 1000, "swing");
				ipad.show();
				ipad.animate ({left : 200}, 1000, "swing");
			}
			else if (current===3)
			{
				mac.animate ({top : -2000}, 1000, "swing", function(){
					mac.hide();	
				});
				macbook.animate ({left : 2000} , 1000, "swing", function() {
					macbook.hide();	
				});
				phone.animate ({top : 2000 }, 1000, "swing", function(){
					phone.hide();	
				});
				ipad.animate ({left : -1000}, 1000, "swing", function(){
					ipad.hide();	
				});

			} 
		}
		else
		{
			$("div#slide" + current).animate ({ opacity: 1 }, 1000, "swing" );
			$("div#slide" + prev).animate( {opacity: 0}, 1000, "swing");
			
			if (current===1)
			{
				mac.animate ({top : -2000}, 1000, "swing", function(){
					mac.hide();	
				});
				macbook.animate ({left : 2000} , 1000, "swing", function() {
					macbook.hide();	
				});
				phone.animate ({top : 2000 }, 1000, "swing", function(){
					phone.hide();	
				});
				ipad.animate ({left : -1000}, 1000, "swing", function(){
					ipad.hide();	
				});
				slider.css("overflow", "visible");
				hand_phone.show();
				hand_phone.animate ( { top: 45 }, 1000);
			
			}
			if (current ===2)
			{
				slider.css("overflow", "hidden");	
				mac.show();
				mac.animate ({top : 10}, 1000, "swing");
				macbook.show();
				macbook.animate ({left : 570} , 1000, "swing");
				phone.show();
				phone.animate ({top : 240 }, 1000, "swing");
				ipad.show();
				ipad.animate ({left : 200}, 1000, "swing");
			}
			else if (current===3)
			{
				hand_phone.animate ( { top: -700 }, 1000, "swing", function() {
					hand_phone.hide();
				});
			} 

		}





	})



};