import controller from './addReport.controller';
import routeConfig from './addReport.route';

export default angular.module('mosquito.sections.map.addReport', [])
  .config(routeConfig)
  .controller('AddReportController', controller);
