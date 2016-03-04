describe('MainController', function() {
  var controller;

  beforeEach(module('mosquito'));

  beforeEach(inject(function($controller) {
    controller = $controller('SignInController');
  }));

  describe('submit()', function() {
    it('should be defined', function() {
      expect(controller.submit).toBeDefined();
    });
  });

});
