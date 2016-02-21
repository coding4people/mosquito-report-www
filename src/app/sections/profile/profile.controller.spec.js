describe('MainController', function() {
  var controller;

  beforeEach(module('mosquito'));

  beforeEach(inject(function($controller) {
    controller = $controller('ProfileController');
  }));

  describe('x()', function() {
    it('should return true', function() {
      expect(controller.x()).toBe(true);
    });
  });

});
