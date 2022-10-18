
(function ($) {
	'use strict';

  // ==================================================
	// Main menu (classic)
	// ==================================================

	// Keeping sub-menus inside screen (useful if multi level sub-menus are used). Effect on large screens only!
	// More info: http://stackoverflow.com/questions/17985334/jquery-solution-for-keeping-dropdown-dropdown-inside-screen
	if ($(window).width() > 1200) {
		$(".tt-submenu-trigger").parent().on("mouseenter", function() {
			var menu = $("> .tt-submenu", this);
			var menupos = $(menu).offset();

			if (menupos.left + menu.width() > $(window).width()) {
				var newpos = -$(menu).width();

				menu.css({ left: newpos });    
			}
		});
	}

	// Main menu hover
	$(".tt-main-menu-list").on("mouseenter", function() {
		$(this).addClass("tt-mm-hover");
	}).on("mouseleave", function() {
		$(this).removeClass("tt-mm-hover");
	});

	// Submenu wrap hover
	$(".tt-submenu-wrap").on("mouseenter", function() {
		$(this).addClass("tt-submenu-open");
	}).on("mouseleave", function() {
		$(this).removeClass("tt-submenu-open");
	});


	// Mobile menu (for classic menu)
	// ===============================

	// Open/close mobile menu on toggle button click
	$("#tt-m-menu-toggle-btn-wrap").on("click", function() {
		$("html").toggleClass("tt-no-scroll");
		$("body").toggleClass("tt-m-menu-open");
		if ($("body").hasClass("tt-m-menu-open")) {

			// Menu step in animations
			$("body").addClass("tt-m-menu-toggle-no-click"); // Disable toggle button click until the animations last.

			// Menu in animations
			var tl_MenuIn = gsap.timeline({
				onComplete: function() { 
					$("body").removeClass("tt-m-menu-toggle-no-click"); 
				}
			});

				 tl_MenuIn.to(".tt-main-menu", { duration: 0.4, autoAlpha: 1 });
				 tl_MenuIn.from(".tt-main-menu-content > ul > li", { duration: 0.4, y: 80, autoAlpha: 0, stagger: 0.05, ease: Power2.easeOut, clearProps:"all" });

			// On menu link click
			$(".tt-main-menu a, .tt-logo a")
			.not('[target="_blank"]') // omit from selection
			.not('[href^="#"]') // omit from selection
			.not('[href^="mailto"]') // omit from selection
			.not('[href^="tel"]') // omit from selection
			.on('click', function() {
				gsap.set("#content-wrap", { autoAlpha: 0 });
				gsap.to(".tt-main-menu-content > ul > li", { duration: 0.4, y: -80, autoAlpha: 0, stagger: 0.05, ease: Power2.easeIn });
			});

		} else {	

			// Menu step out animations
			$("body").addClass("tt-m-menu-toggle-no-click"); // Disable toggle button click until the animations last.

			// Menu out animations
			var tl_MenuOut = gsap.timeline({
				onComplete: function() { 
					$("body").removeClass("tt-m-menu-toggle-no-click"); 
				}
			});

				 tl_MenuOut.to(".tt-main-menu-content > ul > li", { duration: 0.4, y: -80, autoAlpha: 0, stagger: 0.05, ease: Power2.easeIn });
				 tl_MenuOut.to(".tt-main-menu", { duration: 0.4, autoAlpha: 0, clearProps:"all" }, "+=0.2");
				 tl_MenuOut.to(".tt-main-menu-content > ul > li", { clearProps:"all" }); // clearProps only

			// Close open submenus
			setTimeout(function () {
				$(".tt-submenu").slideUp(350);
				$(".tt-submenu-trigger").removeClass("tt-m-submenu-open");
			}, 500);
		}

		return false;
	});

	// Append element if link href contains #
 	$('.tt-submenu-trigger > a[href^="#"]').parent(".tt-submenu-trigger").append('<span class="tt-submenu-trigger-m"></span>');

	// Open submenu if link href contains #
	if ($(".tt-submenu-trigger > a").is('[href^="#"]')) {
		$(".tt-submenu-trigger-m").on("click", function() {
			var $this = $(this).parent();
			if ($this.hasClass("tt-m-submenu-open")) {
				$this.removeClass("tt-m-submenu-open");
				$this.next().slideUp(350);
			} else {
				$this.parent().parent().find(".tt-submenu").prev().removeClass("tt-m-submenu-open");
				$this.parent().parent().find(".tt-submenu").slideUp(350);
				$this.toggleClass("tt-m-submenu-open");
				$this.next().slideToggle(350);
			}
		});
	}

	// Open submenu on caret click
	$(".tt-submenu-trigger").append('<span class="tt-m-caret"></span>');
	$(".tt-m-caret").on("click", function() {
		var $this = $(this).parent();
		if ($this.hasClass("tt-m-submenu-open")) {
			$this.removeClass("tt-m-submenu-open");
			$this.next().slideUp(350);
		} else {
			$this.parent().parent().find(".tt-submenu").prev().removeClass("tt-m-submenu-open");
			$this.parent().parent().find(".tt-submenu").slideUp(350);
			$this.toggleClass("tt-m-submenu-open");
			$this.next().slideToggle(350);
		}
	});

})(jQuery); 