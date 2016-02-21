import controller from './map.controller';
import routeConfig from './map.route';
import addReportModule from './addReport/addReport.module';
import reportModule from './report/report.module';

export default angular.module('mosquito.sections.map', [
    addReportModule.name,
    reportModule.name
  ])
  .config(routeConfig)
  .controller('MapController', controller);
