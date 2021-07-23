$(document).ready(function() {
    //MAP
	if ($('#points-map').length>0) {
		ymaps.ready(initializePointsMap);
	}



	//Partners-city-TOGGLE
	$('body').on('click','.js-points-city', function(e){
		e.preventDefault();
		let map = $(this).data('map');
        let t_text = $(this).text();
		let t_lat = $(this).attr('data-lat');
		let t_long = $(this).attr('data-long');

		$(this).parents('.select-add').next('.select-cards').find(".contacts__list").addClass('dnone');
        $("#map"+map).removeClass('dnone');

		pointsMap.setCenter([t_lat,t_long]);
		pointsMap.setZoom(12,
			{
				smooth: true,
				position: [t_lat,t_long],
			}
		);

        $(this).parents('.select-add__item').find('.select-add__link').text(t_text);
        $(this).parents('.select-add-sub__wrap').find('.select-add-sub__link').removeClass('active');
		$(this).addClass('active');

        $('.select-add-sub').slideUp(150);
		$('.select-add__link').removeClass('active');

		pointsMap.balloon.close();
	});

	//Partners-country-TOGGLE
	$('body').on('click','.js-points-country', function(e){
		e.preventDefault();
		let t_text = $(this).text();
		let t_lat = $(this).attr('data-lat');
		let t_long = $(this).attr('data-long');

		pointsMap.setCenter([t_lat,t_long]);
		pointsMap.setZoom(12,
			{
				smooth: true,
				position: [t_lat,t_long],
			}
		);

		$(this).parents('.select-add__item').find('.select-add__link').text(t_text);
		$(this).parents('.select-add-sub__wrap').find('.select-add-sub__link').removeClass('active');
		$(this).addClass('active');
		$('.select-add-sub').slideUp(150);
		$('.select-add__link').removeClass('active');

		let country = $(this).data('country');
		$(this).parents('.select-add').find('.select-add-city').addClass('dnone');
		$(this).parents('.select-add').find(".select-add-city[data-country='" + country +"']").removeClass('dnone');

		//активный город
		let activeCityText = $(this).parents('.select-add').find(".select-add-city[data-country='" + country +"']").find('.select-add-sub__link:first-child').text();
		$(this).parents('.select-add').find(".select-add-city[data-country='" + country +"']").find('.select-add__link').text(activeCityText);
		$(this).parents('.select-add__item').siblings('.select-add-city').find('.select-add-sub__link').removeClass('active');
		$(this).parents('.select-add__item').siblings('.select-add-city').find('.select-add-sub__link:first-child').addClass('active');

		//убираем карточки
		$(this).parents('.select-add').next('.select-cards').find('.contacts__list').addClass('dnone');
		//и показываем по дата-атрибуту
		let map = $(this).data('map');
		$("#map"+map).removeClass('dnone');

		pointsMap.balloon.close();
	});
});


//ТОЧКИ ПРОДАЖ
function initializePointsMap() {
	let pl2;
	//массив городов
	let items = [
		{   id: 1, 
			center: [53.1322925, 26.0184156],
			title: "Магазин «Керамин-Барановичи»",
			phone1: "+375 (163) 66-97-63",
			phone2: "+375 (163) 66-97-62",
			mail: "info@keramin.by",
			address: "г. Барановичи, ул. Комсомольская, 5",
			time1: "пн-пт: 10:00-20:00",
			time2: "сб: 10:00-18:00",
			time3: "вс: 10:00-16:00",
		},
		{   id: 2, 
			center: [53.11682518670535, 26.033778190612797],
			title: "Магазин «Керамин-Барановичи2»",
			phone1: "+375 (163) 66-97-63",
			phone2: "+375 (163) 66-97-62",
			mail: "info@keramin.by",
			address: "г. Барановичи, ул. Комсомольская, 10",
			time1: "пн-пт: 10:00-20:00",
			time2: "сб: 10:00-18:00",
			time3: "вс: 10:00-16:00",
		},
		{   id: 3, 
			center: [53.902334, 27.5618791],
			title: "Магазин «Керамин-Минск1»",
			phone1: "+375 (163) 66-97-63",
			phone2: "+375 (163) 66-97-62",
			mail: "info@keramin.by",
			address: "г. Минск, ул. Комсомольская, 5",
			time1: "пн-пт: 10:00-20:00",
			time2: "сб: 10:00-18:00",
			time3: "вс: 10:00-16:00",
		},
		{   id: 4, 
			center: [53.8722670867185, 27.532596588134766],
			title: "Магазин «Керамин-Минск2»",
			phone1: "+375 (163) 66-97-63",
			phone2: "+375 (163) 66-97-62",
			mail: "info@keramin.by",
			address: "г. Минск, ул. Комсомольская, 13",
			time1: "пн-пт: 10:00-20:00",
			time2: "сб: 10:00-18:00",
			time3: "вс: 10:00-16:00",
		},
		{   id: 5, 
			center: [53.893616814622675, 27.624778747558597],
			title: "Магазин «Керамин-Минск3»",
			phone1: "+375 (163) 66-97-63",
			phone2: "+375 (163) 66-97-62",
			mail: "info@keramin.by",
			address: "г. Минск, ул. Комсомольская, 15",
			time1: "пн-пт: 10:00-20:00",
			time2: "сб: 10:00-18:00",
			time3: "вс: 10:00-16:00",
		},
		{   id: 6, 
			center: [52.093751, 23.6851851],
			title: "Магазин «Керамин-Брест1»",
			phone1: "+375 (163) 66-97-63",
			phone2: "+375 (163) 66-97-62",
			mail: "info@keramin.by",
			address: "г. Брест, ул. Комсомольская, 5",
			time1: "пн-пт: 10:00-20:00",
			time2: "сб: 10:00-18:00",
			time3: "вс: 10:00-16:00",
		},
		{   id: 7, 
			center: [52.11035335342035,23.758192062377933],
			title: "Магазин «Керамин-Брест2»",
			phone1: "+375 (163) 66-97-63",
			phone2: "+375 (163) 66-97-62",
			mail: "info@keramin.by",
			address: "г. Брест, ул. Комсомольская, 10",
			time1: "пн-пт: 10:00-20:00",
			time2: "сб: 10:00-18:00",
			time3: "вс: 10:00-16:00",
		},
		{   id: 8, 
			center: [53.65430386256685, 23.81561279296875],
			title: "Магазин «Керамин-Гродно1»",
			phone1: "+375 (163) 66-97-63",
			phone2: "+375 (163) 66-97-62",
			mail: "info@keramin.by",
			address: "г. Гродно, ул. Комсомольская, 5",
			time1: "пн-пт: 10:00-20:00",
			time2: "сб: 10:00-18:00",
			time3: "вс: 10:00-16:00",
		},
		{   id: 9, 
			center: [53.660967050699135, 23.834838867187504],
			title: "Магазин «Керамин-Гродно2»",
			phone1: "+375 (163) 66-97-63",
			phone2: "+375 (163) 66-97-62",
			mail: "info@keramin.by",
			address: "г. Гродно, ул. Комсомольская, 15",
			time1: "пн-пт: 10:00-20:00",
			time2: "сб: 10:00-18:00",
			time3: "вс: 10:00-16:00",
		},
		{   id: 10, 
			center: [53.897662927123974, 30.293769836425785],
			title: "Магазин «Керамин-Могилев1»",
			phone1: "+375 (163) 66-97-63",
			phone2: "+375 (163) 66-97-62",
			mail: "info@keramin.by",
			address: "г. Могилев, ул. Комсомольская, 5",
			time1: "пн-пт: 10:00-20:00",
			time2: "сб: 10:00-18:00",
			time3: "вс: 10:00-16:00",
		},
		{   id: 11, 
			center: [53.90636074242824, 30.370159149169925],
			title: "Магазин «Керамин-Могилев2»",
			phone1: "+375 (163) 66-97-63",
			phone2: "+375 (163) 66-97-62",
			mail: "info@keramin.by",
			address: "г. Могилев, ул. Комсомольская, 15",
			time1: "пн-пт: 10:00-20:00",
			time2: "сб: 10:00-18:00",
			time3: "вс: 10:00-16:00",
		},
		{   id: 12, 
			center: [55.75, 37.6167],
			title: "Магазин «Москва»",
			phone1: "+375 (163) 66-97-63",
			phone2: "+375 (163) 66-97-62",
			mail: "info@keramin.by",
			address: "г. «Москва, ул. Комсомольская, 5",
			time1: "пн-пт: 10:00-20:00",
			time2: "сб: 10:00-18:00",
			time3: "вс: 10:00-16:00",
		},
		{   id: 13, 
			center: [55.765758360887986, 37.74078369140626],
			title: "Магазин «Москва 2»",
			phone1: "+375 (163) 66-97-63",
			phone2: "+375 (163) 66-97-62",
			mail: "info@keramin.by",
			address: "г. «Москва, ул. Комсомольская, 5",
			time1: "пн-пт: 10:00-20:00",
			time2: "сб: 10:00-18:00",
			time3: "вс: 10:00-16:00",
		},
		{   id: 14, 
			center: [59.84481485969108, 30.234375000000004],
			title: "Магазин «Санкт-Петербург»",
			phone1: "+375 (163) 66-97-63",
			phone2: "+375 (163) 66-97-62",
			mail: "info@keramin.by",
			address: "г. Санкт-Петербург, ул. Комсомольская, 5",
			time1: "пн-пт: 10:00-20:00",
			time2: "сб: 10:00-18:00",
			time3: "вс: 10:00-16:00",
		},
		{   id: 15, 
			center: [59.86722789682173, 30.344924926757816],
			title: "Магазин Санкт-Петербург 2»",
			phone1: "+375 (163) 66-97-63",
			phone2: "+375 (163) 66-97-62",
			mail: "info@keramin.by",
			address: "г. Санкт-Петербург, ул. Комсомольская, 5",
			time1: "пн-пт: 10:00-20:00",
			time2: "сб: 10:00-18:00",
			time3: "вс: 10:00-16:00",
		},
		{   id: 16, 
			center: [56.9984452, 40.9737394],
			title: "Магазин «Иваново»",
			phone1: "+375 (163) 66-97-63",
			phone2: "+375 (163) 66-97-62",
			mail: "info@keramin.by",
			address: "г. Иваново, ул. Комсомольская, 5",
			time1: "пн-пт: 10:00-20:00",
			time2: "сб: 10:00-18:00",
			time3: "вс: 10:00-16:00",
		},
		{   id: 17, 
			center: [56.9872716995536, 41.00955963134766],
			title: "Магазин Иваново 2»",
			phone1: "+375 (163) 66-97-63",
			phone2: "+375 (163) 66-97-62",
			mail: "info@keramin.by",
			address: "г. Иваново, ул. Комсомольская, 5",
			time1: "пн-пт: 10:00-20:00",
			time2: "сб: 10:00-18:00",
			time3: "вс: 10:00-16:00",
		},
	];

	pointsMap = new ymaps.Map("points-map", {
		center:[53.1322925,26.0184156],
		zoom: 12,
		controls: []
	}, {
		suppressMapOpenBlock: true
	}); 
			
	pointsMap.controls.add(new ymaps.control.ZoomControl({options: { position: { right: 20, top: 50 }}}));
	pointsMap.behaviors.disable('scrollZoom');

	for (i = 0; i < items.length; ++i) {

		balloonContentLayout = ymaps.templateLayoutFactory.createClass(
			'<div class="page-map-about">\
				<h5>' +items[i].title+ '</h5>\
				<div class="page-map-about__list">\
					<div class="page-map-about__item">\
						<div class="page-map-about-phones">\
							<div class="page-map-about-phones__item">' + items[i].phone1 + '</div>\
							<div class="page-map-about-phones__item">' + items[i].phone2 + '</div>\
						</div>\
					</div>\
					<div class="page-map-about__item">\
						<div class="page-map-about-mail">' + items[i].mail + '</div>\
					</div>\
					<div class="page-map-about__item">\
						<div class="page-map-about-address">' + items[i].address + '</div>\
					</div>\
					<div class="page-map-about__item">\
						<div class="page-map-about-time">\
							<div class="page-map-about-time__item">' + items[i].time1 + '</div>\
							<div class="page-map-about-time__item">' + items[i].time2 + '</div>\
							<div class="page-map-about-time__item">' + items[i].time3 + '</div>\
						</div>\
					</div>\
				</div>\
			</div>'
		),

		pl2 = new ymaps.Placemark(items[i].center,{
				// balloonContentBody: 'Адрес',
			},{
			iconLayout: 'default#image',
			iconImageHref: "img/content/label.png", 
			iconImageSize: [60,80],
			iconImageOffset: [0, -75],
			balloonContentLayout: balloonContentLayout,
			balloonPanelMaxMapArea: 0,
			hideIconOnBalloonOpen: false,
		}); 
		pointsMap.geoObjects.add(pl2);
	}
}