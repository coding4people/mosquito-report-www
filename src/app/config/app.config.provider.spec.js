describe('ConfigProvider', function() {
  'use strict';

  var Config;
  var LocalStorageService;

  beforeEach(function () {
    inject(function (_Config_, _LocalStorageService_) {
      LocalStorageService = _LocalStorageService_;
      Config = _Config_;
    });
  });
});
