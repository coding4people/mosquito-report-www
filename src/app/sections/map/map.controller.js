let that;

export default class MapController {
  constructor($scope, NgMap, MapService, MapHelperService, NavigatorGeolocation, toastr, Messages, _) {
    'ngInject';
    that = this;

    this.mapStyle = MapHelperService.getMapStyle();
    this.MapService = MapService;
    this.NavigatorGeolocation = NavigatorGeolocation;
    this.isLoading = false;
    this.toastr = toastr;
    this.Messages = Messages;
    this.position = null;
    this._ = _;
    this.NgMap = NgMap;
    this.$scope = $scope;

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
            _self.positions = data.plain();
          }, () => {
            _self.toastr.error(_self.Messages.toastr.error._MAP_QUERY_FOCUS_ERROR_);
            _self.isLoading = false;
          });
      });
  }

  showPinInfo(event, pos) {
    if(!that.showPinInfoToggle) {
      that.showPinInfoToggle = true;
    }

    that._.each(that.positions, item => item.icon = 'assets/images/app/marker.png');
    that.positions[pos].icon = 'assets/images/app/marker-clicked.png';

    that.pinSelected = that.positions[pos];
    that.pinSelected.lat = that.positions[pos].latlon.split(',')[0];
    that.pinSelected.lng = that.positions[pos].latlon.split(',')[1];
    that.$scope.$digest();
  }
}
