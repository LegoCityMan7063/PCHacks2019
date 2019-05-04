// JavaScript source code
var map;
var infoWindow;
function userLocation() {
    map = new google.maps.Map(document.getElementById('map')), {
        center: { lat: -34.297, lng: 150.644 },
        zoom: 6
    });
    infoWindow = new google.maps.infoWindow;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocaiton ? 'Error: The Geolocation service failed ' : 'Error: Your browser doesn\'t support geolocation');
    infoWindow.open(map);
}
