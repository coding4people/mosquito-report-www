describe('MapService', function() {
  var MapService;

  beforeEach(module('mosquito'));

  beforeEach(inject(function(_MapService_) {
    MapService = _MapService_;
  }));

  it('MapService should be defined', function () {
    expect(MapService).toBeDefined();
  });

  describe('getMapStyle()', function () {
    it('should be defined', function () {
      expect(MapService.getMapStyle).toBeDefined();
    });
  });
});
