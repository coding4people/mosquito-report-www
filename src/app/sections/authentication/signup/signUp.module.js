import MainController from './main.controller';
import mainRoute from './main.route';

export default angular.module('mosquito.sections.main', [])
  .config(mainRoute)
  .controller('MainController', MainController);
