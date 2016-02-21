describe('MapHelperService', function() {
  var MapHelperService;
  var MapStyle;

  beforeEach(module('mosquito'));

  beforeEach(inject(function(_MapHelperService_, _MapStyle_) {
    MapHelperService = _MapHelperService_;
    MapStyle = _MapStyle_;
  }));

  it('MapHelperService should be defined', function () {
    expect(MapHelperService).toBeDefined();
  });

  describe('getMapStyle()', function () {
    it('should be defined', function () {
      expect(MapHelperService.getMapStyle).toBeDefined();
    });

    it('should return mapStyle', function () {
      expect(MapHelperService.getMapStyle()).toBe(MapStyle);
    });
  });
});
