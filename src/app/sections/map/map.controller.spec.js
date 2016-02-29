describe('MainController', function() {
  var controller;
  var $scope;

  beforeEach(module('mosquito'));

  beforeEach(inject(function($controller, _$rootScope_) {
    $scope = _$rootScope_.$new();
    controller = $controller('MapController', {$scope: $scope});
  }));

  describe('getCurrentPosition()', function() {
    var NavigatorGeolocation;
    var MapService;
    var Messages;
    var toastr;
    var $q;
    var deferredNavigatorGeolocation;
    var deferredMapService;
    var position = {
      coords: {
        latitude: 1,
        longitude: 2
      }
    };

    beforeEach(inject(function (_$q_, _NavigatorGeolocation_, _MapService_, _Messages_, _toastr_) {
      NavigatorGeolocation= _NavigatorGeolocation_;
      MapService = _MapService_;
      $q = _$q_;
      Messages = _Messages_;
      toastr = _toastr_;

      deferredNavigatorGeolocation = $q.defer();
      deferredMapService = $q.defer();

      spyOn(NavigatorGeolocation, 'getCurrentPosition').and.returnValue(deferredNavigatorGeolocation.promise);
      spyOn(MapService, 'getZoneFocus').and.returnValue(deferredMapService.promise);
      spyOn(toastr, 'error');
    }));

    it('should be defined', function() {
      expect(controller.getCurrentPosition).toBeDefined();
    });

    it('Should get current position and call getZoneFocus', function () {
      controller.getCurrentPosition();
      expect(controller.isLoading).toBeTruthy();
      expect(NavigatorGeolocation.getCurrentPosition).toHaveBeenCalled();
      deferredNavigatorGeolocation.resolve(position);
      $scope.$digest();
      expect(MapService.getZoneFocus).toHaveBeenCalledWith(position.coords.latitude, position.coords.longitude);
      deferredMapService.resolve();
      $scope.$digest();
      expect(controller.isLoading).toBeFalsy();
    });

    it('should try to get current position, toastr error need to be called', function () {
      controller.getCurrentPosition();
      deferredNavigatorGeolocation.resolve(position);
      $scope.$digest();
      deferredMapService.reject();
      $scope.$digest();
      expect(controller.isLoading).toBeFalsy();
      expect(toastr.error).toHaveBeenCalledWith(Messages.toastr.error._MAP_QUERY_FOCUS_ERROR_);
    });
  });
});
