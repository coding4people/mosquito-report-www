export default class MapHelperService {
  constructor(MapStyle) {
    'ngInject';

    this.MapStyle = MapStyle;
  }

  getMapStyle() {
    return this.MapStyle;
  }
}
