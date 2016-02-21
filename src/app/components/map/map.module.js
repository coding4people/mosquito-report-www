import * as StyleConstants from './constants/mapStyle.constant';
import service from './map.service';

export default angular.module('mosquito.components.map', [])
  .service('MapService', service)
  .value('MapStyle', StyleConstants.MAP_STYLE);
