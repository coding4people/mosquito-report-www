describe('LocalStorageService', function() {
  var LocalStorageService;
  var $window;

  beforeEach(inject(function(_LocalStorageService_, _$window_) {
    LocalStorageService = _LocalStorageService_;
    $window = _$window_;
  }));

  describe('set()', function() {
    it('should be defined', function () {
      expect(LocalStorageService.set).toBeDefined();
    });

    it('should keep key and value', function () {
      LocalStorageService.set('test', 'Corinthians!');
      expect($window.localStorage.test).toBe('Corinthians!');
    });
  });

  describe('remove()', function() {
    it('should be defined', function () {
      expect(LocalStorageService.remove).toBeDefined();
    });

    it('should remove key from localStorage', function () {
      LocalStorageService.set('test', 'Corinthians!');
      expect($window.localStorage.test).toBe('Corinthians!');
      LocalStorageService.remove('test');
      expect($window.localStorage.test).toBeUndefined();
    });
  });

  describe('get()', function() {
    it('should be defined', function () {
      expect(LocalStorageService.get).toBeDefined();
    });

    it('should get by key from localStorage', function () {
      LocalStorageService.set('test', 'Corinthians!');
      expect(LocalStorageService.get('test')).toBe('Corinthians!');
    });
  });

  describe('setObject()', function() {
    it('should be defined', function () {
      expect(LocalStorageService.setObject).toBeDefined();
    });

    it('should set plain object', function () {
      LocalStorageService.setObject('test', {team: 'Corinthians!'});
      expect(LocalStorageService.get('test')).toBe('{"team":"Corinthians!"}');
    });
  });

  describe('clear()', function() {
    it('should be defined', function () {
      expect(LocalStorageService.clear).toBeDefined();
    });

    it('should set plain object', function () {
      LocalStorageService.set('test', 'Corinthians!');
      expect($window.localStorage.test).toBe('Corinthians!');
      LocalStorageService.clear();
      expect($window.localStorage.test).toBeUndefined();
    });
  });

  describe('getObject()', function() {
    it('should be defined', function () {
      expect(LocalStorageService.getObject).toBeDefined();
    });

    it('should set plain object', function () {
      LocalStorageService.setObject('test', {team: 'Corinthians!'});
      expect(LocalStorageService.getObject('test')).toEqual(jasmine.any(Object));
      expect(LocalStorageService.getObject('test')).toEqual({team: 'Corinthians!'});
    });
  });
});
