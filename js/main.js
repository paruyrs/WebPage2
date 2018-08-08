(function($) {
	var illustate = $("div#illustate"),
		text = illustate.find("div#text"),
		screenwriter = illustate.find("div#screenwriter"),
		helloworld = illustate.find("div#helloworld"),
		home = $("div#home"),
		features = $("div#features"),
		portfolio = $("div#portfolio-outer"),
		page = $("div#page"),
		blog = $("div#blog"),
		team = $("div#team"),
		footer = $("div#footer"),
		current = 0;

	function addStile (head) {

		head.addClass (head.attr("id"));
		var headContent = head.find("*");

		headContent.each ( function() {
			$(this).addClass ( $(this).data("class"));
		})
	}


	function animHide (obj, time) {
		obj.animate({opacity:0}, (time|300), "swing", function  () {
			obj.hide();
		});
	}

	function animShow (obj, time) {
		obj.show();
		obj.animate({opacity:1}, (time|300), "swing", function  () {
		});
	}
	
	$("body").on("click", function() {
		
	})

	// illustate.hide();
	home.hide();
	features.hide();
	portfolio.hide();
	page.hide();
	blog.hide();
	team.hide();
	footer.hide();

	setTimeout (animHide, 1000);
	setTimeout (filmInit, 1000);
	setTimeout (animShow, 1000);
	setTimeout (addStile, 1000);


	$("div.logo").on("click", function(){
		current ++;
		if (current==1)
		{
			animHide (screenwriter);
			filmInit (jQuery);
			animShow (helloworld);
		}
		if (current==2)
		{
			animHide (helloworld);
			text.html ("html?");
			animShow (screenwriter);
		}
		if (current==3)
		{
			animHide (screenwriter);
			filmInit (jQuery);
			animHide (illustate);
			animShow (home);
			animShow (features);
			animShow (portfolio);
			animShow (page);
			animShow (blog);
			animShow (team);
			animShow (footer);
		}
		if (current==4)
		{
			animShow (screenwriter);
			animHide (home);
			animHide (features);
			animHide (portfolio);
			animHide (page);
			animHide (blog);
			animHide (team);
			animHide (footer);
			text.html ("css?");
			animShow (illustate);
		}
		if (current==5)
		{
			animHide (screenwriter);
			filmInit (jQuery);
			animHide (illustate);
			addStile (home);
			addStile (features);	
			addStile (portfolio);
			addStile (page);
			addStile (blog);
			addStile (team);
			addStile (footer);
			animShow (home);
			animShow (features);
			animShow (portfolio);
			animShow (page);
			animShow (blog);
			animShow (team);
			animShow (footer);
		}
		if (current==6)
		{
			animShow (screenwriter);
			animHide (home);
			animHide (features);
			animHide (portfolio);
			animHide (page);
			animHide (blog);
			animHide (team);
			animHide (footer);
			text.html ("js?");
			animShow (illustate);
		}
		if (current==7)
		{
			animHide (screenwriter);
			filmInit (jQuery);
			animHide (illustate);
			addStile (home);
			addStile (features);	
			addStile (portfolio);
			addStile (page);
			addStile (blog);
			addStile (team);
			addStile (footer);
			animShow (home);
			animShow (features);
			animShow (portfolio);
			animShow (page);
			animShow (blog);
			animShow (team);
			animShow (footer);
			menuInit (jQuery);
			sliderInit (jQuery);
		}


	})
	logoAnimeInit(jQuery);

})(jQuery);