/*Icon rocket*/

var rocket = document.querySelector('#rocket');

rocket.addEventListener('click', function () {
	this.classList.toggle('clicked');
})  

jQuery(document).ready(function(){
			$(".lightbox").lightbox();
			jQuery('.parallax-layer').parallax({
				mouseport: jQuery("#parallax")
			});
					// scrolar				
			
			// TimelineLite for title animation, then start up superscrollorama when complete
			(new TimelineLite({onComplete:initScrollAnimations}))
				.from( $('#features-line1 div'), .8, {delay: 1, css:{right:'1000px'}, ease:Back.easeOut})				
				.from( $('#features-line3 div'), .8, {delay: 0, css:{left:'1000px'}, ease:Back.easeOut})				
				.to( $('#creative'), .5, {css:{opacity:1, 'margin-top':0}, delay:0, ease:Quad.easeOut})
				.to( $('#features p'), 1, {css:{opacity:1}, delay:1, ease:Quad.easeOut});

			function initScrollAnimations() {
				
				var controller = $.superscrollorama();			
				
				// hire tweens
				$('#features h1').lettering().find('span').css('position','relative').each(function() {
					$('#features').find("h1,p").css('visibility','visible');
					controller.addTween('#features #creative g', TweenMax.from( $(this), .25, {delay:Math.random()*.2,css:{left:Math.random()*1200-600,top:Math.random()*600-300,opacity:0}, ease:Expo.easeOut}),200);

				});	

				// showcase tweens
				controller.addTween('#portfolio', TweenMax.from( $('#portfolio h1'), .75, {css:{letterSpacing:20,opacity:0}, ease:Quad.easeOut}));
				controller.addTween('#portfolio', TweenMax.from( $('#portfolio button'), 1, {css:{opacity:0}, ease:Quad.easeOut}));
				$('#portfolio .gallery li').css('position','relative').each(function() {
					controller.addTween('#portfolio .gallery', TweenMax.from( $(this), 1, {delay:Math.random()*.2,css:{left:Math.random()*200-100,top:Math.random()*200-100,opacity:0}, ease:Back.easeOut}));
				});
			}
		});

