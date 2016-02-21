export default class MapController {
  constructor(NgMap, MapService, MapHelperService, NavigatorGeolocation) {
    'ngInject';

    this.mapStyle = MapHelperService.getMapStyle();
    this.MapService = MapService;
    this.NavigatorGeolocation = NavigatorGeolocation;
    this.isLoading = false;

    //var vm = this;
    //vm.dynMarkers = [];
    //NgMap.getMap().then(function(map) {
    //  for (var i=0; i<1000; i++) {
    //    var latLng = new google.maps.LatLng(markers[i].position[0], markers[i].position[1]);
    //    vm.dynMarkers.push(new google.maps.Marker({position:latLng}));
    //  }
    //  vm.markerClusterer = new MarkerClusterer(map, vm.dynMarkers, {});
    //});
  }

  getCurrentPosition() {
    let _self = this;
    _self.isLoading = true;

    this.NavigatorGeolocation.getCurrentPosition()
      .then(function(position) {
        _self.MapService.getZoneFocus(position.coords.latitude, position.coords.longitude)
          .then(() => _self.isLoading = false, () => _self.isLoading = false);
      });
  }
}
