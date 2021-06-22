$(document).ready(function(){

	$(window).scroll(function(){
		if(this.scrollY>20){
			$('.navbar').addClass("sticky");
		}else{
			$('.navbar').removeClass("sticky");
		}
		if(this.scrollY>400){
			$('.scroll-up-btn').addClass("show");
		}else{
			$('.scroll-up-btn').removeClass("show");
		}
	});

	//slide-up script
	$('.scroll-up-btn').click(function(){
		$('html').animate({scrollTop: 0});
	});


	//close modal
	$('.close').click(function(){
		$('.modal-overlay').hide();
	});
	$('.btn-red').click(function(){
		$('.modal-overlay').hide();
	});


	//toggle menu/navbar
	$('.menu-btn').click(function(){
		$('.navbar .menu').toggleClass("active");
		$('.menu-btn i').toggleClass("active");
	});

	//owl carousel script
	$('.carousel').owlCarousel({
		margin:20,
		loop: true,
		autoplay:true,
		autoplayTimeOut: 2000,
		autoplayHoverPause: true,
		responsive:{
			0:{
				items:1,
				nav: false
			},
			600:{
				items:2,
				nav:false
			},
			1000:{
				items:3,
				nav:false
			}
		}
	});



	//typing animaion script
	var typed = new Typed(".typing", {
		strings: ["YouTuber", "Blogger", "Web Developer", "Freelancer"],
		typeSpeed: 150,
		backSpeed: 80,
		loop:true
	});



});

