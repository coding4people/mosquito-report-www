import controller from './map.controller';
import service from './map.service';
import routeConfig from './map.route';
import addReportModule from './addReport/addReport.module';
import reportModule from './report/report.module';
import pinInfo from './pinInfo/pinInfo.module';

export default angular.module('mosquito.sections.map', [
    addReportModule.name,
    reportModule.name,
    pinInfo.name
  ])
  .config(routeConfig)
  .service('MapService', service)
  .controller('MapController', controller);
