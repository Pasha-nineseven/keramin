$(document).ready(function() {
	//HEADER
	stickyHeader();

	//MENU-MOBILE
	$('body').on('click','.menu-btn', function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		// 
		$('.page-header').toggleClass('active');
		$('.top-add').fadeToggle();
		$('body').toggleClass('fixed');
	});

	//SEARCH
	$('body').on('click','.js-search-link', function(e){
		e.preventDefault();
		$('.page-header-search__form').fadeIn();
		$('.page-header').addClass('m-search');
		$('.page-header-search__input').focus();
	});
	$('body').on('click','.js-search-close-link', function(e){
		e.preventDefault();
		$('.page-header-search__form').fadeOut();
		$('.page-header').removeClass('m-search');
	});
	$(document).click(function (e){
		var div = $(".page-header-search");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
				$('.page-header-search__form').fadeOut();
				$('.page-header').removeClass('m-search');
		}
	});

	//MOBILE submenu
	$("body").on("click", ".js-sub-toggle", function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).next('.page-header-menu-sub').slideToggle();
	});

	//FILTER
	$("body").on("click", ".filter-toggle", function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$('.catalog-filter__item').slideToggle();
	});

	//TABLE-WRAP
	if ($("table").length>0) {
		$("table").wrap("<div class='table-wrap'></div>");
	}

	//INPUT FILE
	if($('.file').length>0){
		let fileLabel = document.querySelector('.file__txt');
		document.getElementById('file__input').onchange = function () {
			let fileName = this.value.split("\\").pop();
			fileLabel.textContent = fileName;
		};
	}

	//POPUP-VIDEO
    $(".js-play-btn").fancybox({
        speed : 330,
        transitionEffect: "slide", 
        animationEffect: "zoom-in-out", 
        infobar: false,
        clickOutside : 'close',
        smallBtn: true,
        buttons: [
            
        ],
    });

	//FILTER
	$("body").on("click", ".catalog-filter__link", function(e){
		e.preventDefault();
		//$('.catalog-filter__link').removeClass('active');
		$(this).parents('.catalog-filter__item').siblings('.catalog-filter__item').find('.catalog-filter__list').slideUp(200);
		$(this).parents('.catalog-filter__item').siblings('.catalog-filter__item').find('.catalog-filter__link').removeClass('active');
		$(this).next('.catalog-filter__list').slideToggle(200);
		$(this).toggleClass('active');
	});
	$(document).click(function (e){
		var div = $(".catalog-filter__item");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
			$('.catalog-filter__list').slideUp(200);
			$('.catalog-filter__link').removeClass('active');
		}
	});

	//ACCORDEON
    $("body").on("click", ".accordeon__link", function(e){
        e.preventDefault();
        $(this).parents('.accordeon__item').toggleClass('active');
        $(this).next('.accordeon__info').slideToggle();
    });

	//SELECT
    if ($('.fs').length>0) {
    	setTimeout(function() {
		  $('.fs').styler();
		}, 100)
    }


	//TABS
    if ($('.resp-tabs').length>0) {
	    $('.resp-tabs').responsiveTabs({
		    startCollapsed: 'accordion'
		});
	}

	//MAP
	if ($('#map').length>0) {
		ymaps.ready(initializeDefaultMap);
	}
	if ($('#points-map').length>0) {
		ymaps.ready(initializePointsMap);
	}

	//S-slider
	if ($( ".structure__slider" ).length>0) {
		var $slider_s = $('.structure__slider');

        $slider_s.slick({
            infinite: true,
            dots: false,
            arrows:true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
			    {
			      breakpoint: 1023,
			      settings: {
			        slidesToShow: 3,
            		slidesToScroll: 1,
			      }
			    },
			    {
			      breakpoint: 768,
			      settings: {
			        slidesToShow: 2,
            		slidesToScroll: 1,
			      }
			    },
			    {
			      breakpoint: 550,
			      settings: {
			        slidesToShow: 1,
            		slidesToScroll: 1,
			      }
			    },
			]
        });

	};

	if($('.collection-top').length>0){
		$('.collection-view').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.collection-pre'
		});

		$('.collection-pre').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			asNavFor: '.collection-view',
			dots: false,
			arrows: false,
			focusOnSelect: true,
			responsive: [
			    {
			      	breakpoint: 1023,
			      	settings: {
			        	slidesToShow: 3,
            			slidesToScroll: 1,
			      	}
			    },
				{
					breakpoint: 700,
					settings: {
					  	slidesToShow: 2,
					  	slidesToScroll: 1,
					}
			  	},
				{
					breakpoint: 600,
					settings: {
					  	slidesToShow: 3,
					  	slidesToScroll: 1,
					}
			  	},
			],
		});
	}

	if($('.index-top__slider').length>0){
		$('.index-top__slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			fade: true,
			dots: true,
		});
	}

	if($('.slider-default').length>0){
		$('.slider-default').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			fade: true,
			dots: true,
		});
	}

	//parallax
	$('.m-scrolling').enllax();

	//contacts select
	$('body').on('click','.js-select-toggle', function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).parents('.select-add__item').find('.select-add-sub').slideToggle(250);
	});
	$(document).click(function (e){
		var div = $(".select-add__item");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
				$('.select-add-sub').slideUp(150);
				$('.js-select-toggle').removeClass('active');
		}
	});


	//where select
	$('body').on('click','.js-contacts-select', function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$('.contacts-select__list').slideToggle(250);
	});
	$(document).click(function (e){
		var div = $(".contacts-select");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
				$('.contacts-select__list').slideUp(150);
				$('.js-contacts-select').removeClass('active');
		}
	});
});

$(window).scroll(function(){
	stickyHeader();
});

// functions
function stickyHeader(){
	var sticky = $('.page-header'),
		scroll = $(window).scrollTop();
		
	if (scroll >= 100) sticky.addClass('fixed');
	else sticky.removeClass('fixed');
}

function initializeDefaultMap() {
	var myMap = new ymaps.Map("map", {
		center:[53.899888,27.566757],
		zoom: 13,
		controls: []
	}, {
		suppressMapOpenBlock: true
	}); 
			
	var myPlacemark = new ymaps.Placemark([53.899888,27.566757],{
			// balloonContentBody: 'Адрес',
		},{
		iconLayout: 'default#image',
		iconImageHref: "img/content/label.png", 
		iconImageSize: [60,80],
		iconImageOffset: [0, -75]
	}); 


	myMap.controls.add(new ymaps.control.ZoomControl({options: { position: { right: 20, top: 50 }}}));
	myMap.behaviors.disable('scrollZoom');

	myMap.geoObjects.add(myPlacemark);
}


function initializePointsMap() {
	var myMap = new ymaps.Map("points-map", {
		center:[53.939888,27.596757],
		zoom: 12,
		controls: []
	}, {
		suppressMapOpenBlock: true
	}); 
	myMap.geoObjects
		.add(new ymaps.Placemark([53.919888,27.576757], {}, {
			iconLayout: 'default#image',
			iconImageHref: "img/content/label.png", 
			iconImageSize: [60,80],
			iconImageOffset: [0, -75]
		}))
		.add(new ymaps.Placemark([53.929888,27.586757], {}, {
			iconLayout: 'default#image',
			iconImageHref: "img/content/label.png", 
			iconImageSize: [60,80],
			iconImageOffset: [0, -75]
		}))
		.add(new ymaps.Placemark([53.939256, 27.483376], {}, {
			iconLayout: 'default#image',
			iconImageHref: "img/content/label.png", 
			iconImageSize: [60,80],
			iconImageOffset: [0, -75]
		}))



	myMap.controls.add(new ymaps.control.ZoomControl({options: { position: { right: 20, top: 50 }}}));
	myMap.behaviors.disable('scrollZoom');

	//myMap.geoObjects.add(myPlacemark);
}
