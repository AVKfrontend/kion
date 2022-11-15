//const scene = document.querySelector('.offer__visual');
//const parInst = new Parallax(scene);
// ----Swiper----
var swiper = new Swiper(".swiper", {
    effect: "cube",
    grabCursor: true,
    loop: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },
});


(function($, undefined){
  $(function(){
  //----------Start JQuery --------
  	// Parallax
  	const scene = $('.offer__visual').get(0);
    const parInst = new Parallax(scene, {
    	calibrateX: true,
    	hoverOnly: true,
    });
    //
    //------- Burger-----//
    const menuToggle = () => {
      $(".overlay").toggleClass("active");
      $("body").toggleClass("body-fix");
      $('.head-row').toggleClass('head-row--fixed-menu');
      $(".menu").toggleClass("active");
      $(".first-line__burger").toggleClass("active");
    }
    const menuRemove = () => {
      $(".overlay").removeClass("active");
      $("body").removeClass("body-fix");
      $('.head-row').removeClass('head-row--fixed-menu');
      $(".menu").removeClass("active");
      $(".first-line__burger").removeClass("active");
    }
    $(".first-line__burger-btn").click(() => {
      menuToggle();
    })
    $(".menu__item").click(() => {
      menuRemove();
    })
    //
    // Modal window
    const windowToggle = function () {
      $(".overlay").toggleClass("dis-block");
      $(".modal").toggleClass("dis-block");
      $("body").toggleClass("body-fix");
      $('.head-row').toggleClass('head-row--fixed');
    }
    $(".first-line__butt").click(() => {
      windowToggle();
    })
    $(".offer__btn").click(() => {
      windowToggle();
    })
    $(".acceptance-button").click(() => {
      windowToggle();
    })
    $(".main-links__button").click(() => {
      windowToggle();
    })
    $(".modal-close").click(() => {
      windowToggle();
    })
    //
    // Main menu visibility
    $(window).scroll(function() {
    	if($(window).scrollTop() > 800) {
    		$('.head-row').addClass('head-row--fixed animate__fadeInDown');
    	}else {
    		$('.head-row').removeClass('head-row--fixed animate__fadeInDown');
    	}
    })
    //
    // Validaiting
    $('.subscription__form').validate({
    	rules: {
    		email: {
    			required: true,
    		}
    	}
    })
  //----------End JQuery --------
  });
})(jQuery);