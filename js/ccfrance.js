

// Access Token to use MapBox tiles
var accessToken = '';

// Leaflet js : initializing map

var ccfmap = L.map('map', {zoomControl: false }).setView([46.800, 2.241], 6);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/outdoors-v11',
    tileSize: 512,
    zoomOffset: -1,
    maxZoom: 6,
    minZoom: 6,
    accessToken: 'pk.eyJ1IjoidWZ0b3UiLCJhIjoidlhkdWZpSSJ9.2oMvf8vHrNgcQqCexg7AtQ'
}).addTo(ccfmap);

// Set initial view
//ccfmap.setView([46.800, 2.241], 6);

// disable drag and zoom handlers
ccfmap.dragging.disable();
ccfmap.touchZoom.disable();
ccfmap.doubleClickZoom.disable();
ccfmap.scrollWheelZoom.disable();
ccfmap.keyboard.disable();
ccfmap.boxZoom.disable();

// disable tap handler, if present.
if (ccfmap.tap) map.tap.disable();




var geoJsonList = [
     {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [1.494177,49.082386]
        },
        properties: {
            title: 'Église Évangélique Trouvée',
            description: '',
            'marker-color': '#EF4135',
            url: 'http://trouvee.fr'
        }
    },
     {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [2.388368,47.079970]
        },
        properties: {
            title: 'Calvary Bourges La Chapelle',
            description: '',
            'marker-color': '#EF4135',
            url: 'http://calvarybourges.strikingly.com'
        }
    },
    /*{
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [5.920697, 45.567063]
        },
        properties: {
            title: 'Calvary Chapel Chambéry',
            description: '',
            'marker-color': '#EF4135',
            url: 'http://www.calvarychapelchambery.fr'
        }
    },*/
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
            url: 'http://www.calvarychapellyon.fr'
        }
    },
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
            url: 'http://www.calvarychapelnice.fr'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [2.342940,48.853630]
        },
        properties: {
            title: 'Calvary Chapel Paris',
            description: '',
            'marker-color': '#EF4135',
            url: 'http://www.calvarychapelparis.org'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [3.518081,50.364157]
        },
        properties: {
            title: 'Calvary Chapel Valenciennes',
            description: '',
            'marker-color': '#EF4135',
            url: 'http://www.valenciennes.cc'
        }
    }
];


/*geoJson.forEach(function(e) {
  var tablerow = '<tr class="text-left"><td>' + e.properties.title + '</td><td><a href="' + e.properties.url + '">' + e.properties.url + '</a></td></tr>';
  $('#ccliste').append(tablerow);
});*/

/*map.featureLayer.on('click', function(e) {

  var popupcontent = '<div class="marker-title">' + e.layer.feature.properties.title + '</div>' +
  '<a href="' + e.layer.feature.properties.url + '">Site Web -></a>';
  e.layer.getPopup().setContent(popupcontent);
  e.layer.openPopup();

  //location.href = e.layer.feature.properties.url;
});*/

function onEachFeature(feature, layer) {

    if (feature.properties.title && feature.properties.url) {
        var tmppopupcontent = '<div class="marker-title"><strong>' + feature.properties.title + '</strong></div>' +
  '<a href="' + feature.properties.url + '" target="_blank">Site Web -></a>';
        layer.bindPopup(tmppopupcontent);

    var tablerow = '<tr class="text-left"><td>' + feature.properties.title + '</td><td><a href="' + feature.properties.url + '">' + feature.properties.url + '</a></td></tr>';
    $('#ccliste').append(tablerow);

    }

}


var ccfLocations = L.geoJSON(false, {
    onEachFeature: onEachFeature
}).addTo(ccfmap);
ccfLocations.addData(geoJsonList);
