var myPlacemark = new ymaps.Placemark([55.75,37.75], null,{
	iconLayout: 'default#image',
	iconImageHref: "../img/map-marker.svg",
	iconImageSize: [30, 44],
	iconImageOffset: [-15, -44]
});
myMap.geoObjects.add(myPlacemark);
