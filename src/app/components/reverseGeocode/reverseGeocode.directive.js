export default function ReverseGeocoderDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    scope: {
      lat: '=',
      lng: '='
    },
    template: '<div></div>',
    replace: true,
    link: function (scope, element) {
      scope.init = () => {
        let geocoder = new google.maps.Geocoder();
        let latlng = new google.maps.LatLng(scope.lat, scope.lng);

        geocoder.geocode({ 'latLng': latlng }, function (results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            if (results[1]) {
              element.text(results[1].formatted_address);
            } else {
              element.text('Location not found');
            }
          } else {
            element.text('Geocoder failed due to: ' + status);
          }
        });
      };

      scope.$watch(() => {
        return scope.lat || scope.lng;
      }, () => {
        scope.init();
      });

      scope.init();
    }
  };

  return directive;
}
