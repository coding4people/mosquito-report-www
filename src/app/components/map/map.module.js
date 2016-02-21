import * as StyleConstants from './constants/mapStyle.constant';

export default angular.module('mosquito.components.map', [])
  .value('MapStyle', StyleConstants.MAP_STYLE);
