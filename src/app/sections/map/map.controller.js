export default class MapController {
  constructor(NgMap, MapService) {
    'ngInject';

    this.mapStyle = MapService.getMapStyle();
    
    var vm = this;
    vm.dynMarkers = [];
    NgMap.getMap().then(function(map) {
      for (var i=0; i<1000; i++) {
        var latLng = new google.maps.LatLng(markers[i].position[0], markers[i].position[1]);
        vm.dynMarkers.push(new google.maps.Marker({position:latLng}));
      }
      vm.markerClusterer = new MarkerClusterer(map, vm.dynMarkers, {});
    });
  }

  x() {
    return true;
  }
}
