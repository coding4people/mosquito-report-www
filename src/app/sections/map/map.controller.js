export default class MapController {
  constructor(NgMap, MapService, MapHelperService, NavigatorGeolocation, toastr, Messages, _) {
    'ngInject';

    this.mapStyle = MapHelperService.getMapStyle();
    this.MapService = MapService;
    this.NavigatorGeolocation = NavigatorGeolocation;
    this.isLoading = false;
    this.toastr = toastr;
    this.Messages = Messages;
    this.position = null;
    this._ = _;
    this.NgMap = NgMap;

    this.getCurrentPosition();
  }

  getCurrentPosition() {
    let _self = this;
    _self.isLoading = true;

    this.NavigatorGeolocation.getCurrentPosition()
      .then(function(position) {
        _self.position = position;
        _self.MapService.getZoneFocus(position.coords.latitude, position.coords.longitude)
          .then(data => {
            _self.isLoading = false;
            _self.plotMarkers(data);
          }, () => {
            _self.toastr.error(_self.Messages.toastr.error._MAP_QUERY_FOCUS_ERROR_);
            _self.isLoading = false;
          });
      });
  }

  plotMarkers(data) {
    let _self = this;
    _self.dynMarkers = [];

    this.NgMap.getMap().then(map => {
      this._.each(data.hits.hit, item => {
        var latLng = new google.maps.LatLng(item.fields.latlon[0].split(',')[0], item.fields.latlon[0].split(',')[1]);
        _self.dynMarkers.push(new google.maps.Marker({position:latLng}));
      });

      _self.markerClusterer = new MarkerClusterer(map, _self.dynMarkers, {});
    });
  }
}
