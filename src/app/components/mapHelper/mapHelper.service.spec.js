describe('MapService', function() {
  var MapService;
  var MapStyle;

  beforeEach(module('mosquito'));

  beforeEach(inject(function(_MapService_, _MapStyle_) {
    MapService = _MapService_;
    MapStyle = _MapStyle_;
  }));

  it('MapService should be defined', function () {
    expect(MapService).toBeDefined();
  });

  describe('getMapStyle()', function () {
    it('should be defined', function () {
      expect(MapService.getMapStyle).toBeDefined();
    });

    it('should return mapStyle', function () {
      expect(MapService.getMapStyle()).toBe(MapStyle);
    });
  });
});
