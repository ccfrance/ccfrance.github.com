



var map = L.mapbox.map('map', 'uftou.hdghjjld', {zoomControl: false, accessToken: 'pk.eyJ1IjoidWZ0b3UiLCJhIjoidlhkdWZpSSJ9.2oMvf8vHrNgcQqCexg7AtQ'});

map.setView([46.800, 2.241], 6);

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
            coordinates: [2.388368,47.079970]
        },
        properties: {
            title: 'Calvary Bourges La Chapelle',
            description: '',
            'marker-color': '#EF4135',
            url: 'http://calvarybourges.strikingly.com'
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
            url: 'http://www.calvarychapelchambery.fr'
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
            coordinates: [2.382732,48.845450]
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
            coordinates: [3.548162,50.335823]
        },
        properties: {
            title: 'Calvary Chapel Valenciennes',
            description: '',
            'marker-color': '#EF4135',
            url: 'http://www.valenciennes.cc'
        }
    }
];

map.featureLayer.setGeoJSON(geoJson);

geoJson.forEach(function(e) {
  var tablerow = '<tr class="text-left"><td>' + e.properties.title + '</td><td><a href="' + e.properties.url + '">' + e.properties.url + '</a></td></tr>';
  $('#ccliste').append(tablerow);
});

map.featureLayer.on('click', function(e) {

  var popupcontent = '<div class="marker-title">' + e.layer.feature.properties.title + '</div>' +
  '<a href="' + e.layer.feature.properties.url + '">Site Web -></a>';
  e.layer.getPopup().setContent(popupcontent);
  e.layer.openPopup();

  //location.href = e.layer.feature.properties.url;
});
