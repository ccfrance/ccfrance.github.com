



var map = L.mapbox.map('map', 'uftou.hdghjjld', {zoomControl: false, accessToken: 'pk.eyJ1IjoidWZ0b3UiLCJhIjoidlhkdWZpSSJ9.2oMvf8vHrNgcQqCexg7AtQ'});

map.setView([46.800, 2.241], 6);

// disable drag and zoom handlers
map.dragging.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();
// disable tap handler, if present.
//if (map.tap) map.tap.disable();

map.featureLayer.loadURL('js/ccfrance.geojson');

map.featureLayer.on('click', function(e) {

  var popupcontent = '<div class="marker-title">' + e.layer.feature.properties.title + '</div>' +
  '<a href="' + e.layer.feature.properties.url + '">Site Web -></a>';
  e.layer.getPopup().setContent(popupcontent);
  e.layer.openPopup();

  //location.href = e.layer.feature.properties.url;
});
