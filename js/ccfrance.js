
var map = L.mapbox.map('map', 'uftou.hdghjjld', {zoomControl: false}).setView([46.800, 2.241], 6);

// disable drag and zoom handlers
map.dragging.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();
// disable tap handler, if present.
if (map.tap) map.tap.disable();

var geoJson = [
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [7.242648,43.692895]
        },
        properties: {
            title: 'Calvary Chapel Nice',
            description: '',
            'marker-color': '#EF4135',
            url: '#ccnice'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [2.382732,48.845450]
        },
        properties: {
            title: 'Calvary Chapel Paris',
            description: '',
            'marker-color': '#EF4135',
            url: '#ccparis'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [4.852425,45.739877]
        },
        properties: {
            title: 'Calvary Chapel Lyon',
            description: '',
            'marker-color': '#EF4135',
            url: '#cclyon'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [5.920697, 45.567063]
        },
        properties: {
            title: 'Calvary Chapel Chambéry',
            description: '',
            'marker-color': '#EF4135',
            url: '#ccchambery'
        }
    }
];

map.featureLayer.setGeoJSON(geoJson);

map.featureLayer.on('mouseover', function(e) {
    e.layer.openPopup();
});

map.featureLayer.on('mouseout', function(e) {
    e.layer.closePopup();
});

map.featureLayer.on('click', function(e) {
    location.href = e.layer.feature.properties.url;
});

