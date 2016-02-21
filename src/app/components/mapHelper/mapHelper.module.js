import * as StyleConstants from './constants/mapStyle.constant';
import service from './mapHelper.service';

export default angular.module('mosquito.components.mapHelper', [])
  .service('MapHelperService', service)
  .value('MapStyle', StyleConstants.MAP_STYLE);
