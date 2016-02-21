import controller from './report.controller';
import routeConfig from './report.route';

export default angular.module('mosquito.sections.map.report', [])
  .config(routeConfig)
  .controller('ReportController', controller);
