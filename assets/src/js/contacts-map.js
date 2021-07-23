$(document).ready(function() {
    //MAP
    if ($('#contacts_general').length>0) {
        ymaps.ready(initializeContactsMapGeneral);
    }
    if ($('#contacts_prod').length>0) {
        ymaps.ready(initializeContactsMapProd);
    }
    if ($('#contacts_factory').length>0) {
        ymaps.ready(initializeContactsMapFactory);
    }
    if ($('#contacts_ceramics').length>0) {
        ymaps.ready(initializeContactsMapCeramics);
    }

    //MAP-TOGGLE
	$('body').on('click','.contacts-select__link', function(e){
		e.preventDefault();
		let map = $(this).data('map');
        let t_text = $(this).text();
        $(".contacts__list").addClass('dnone');
        $("#map"+map).removeClass('dnone');

        $('.contacts-select__t').text(t_text);
        $('.contacts-select__item').removeClass('active');
        $(this).parents('.contacts-select__item').addClass('active');

        $('.page-map').addClass('dnone');
        $('[data-select-map=' + map + ']').removeClass('dnone');

        $('.contacts-select__list').slideUp(150);
		$('.js-contacts-select').removeClass('active');
	});
});

//головной офис
function initializeContactsMapGeneral() {
	var myMap = new ymaps.Map("contacts_general", {
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

//производство
function initializeContactsMapProd() {
	var myMap = new ymaps.Map("contacts_prod", {
		center:[53.909888,27.596757],
		zoom: 13,
		controls: []
	}, {
		suppressMapOpenBlock: true
	}); 
			
	var myPlacemark = new ymaps.Placemark([53.909888,27.596757],{
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

//завод
function initializeContactsMapFactory() {
	var myMap = new ymaps.Map("contacts_factory", {
		center:[53.879888,27.546757],
		zoom: 13,
		controls: []
	}, {
		suppressMapOpenBlock: true
	}); 
			
	var myPlacemark = new ymaps.Placemark([53.879888,27.546757],{
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

//керамзавод
function initializeContactsMapCeramics() {
	var myMap = new ymaps.Map("contacts_ceramics", {
		center:[53.879888,27.586757],
		zoom: 13,
		controls: []
	}, {
		suppressMapOpenBlock: true
	}); 
			
	var myPlacemark = new ymaps.Placemark([53.879888,27.586757],{
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