export default class MapService {
  constructor(MapStyle) {
    'ngInject';

    this.MapStyle = MapStyle;
  }

  getMapStyle() {
    return this.MapStyle;
  }
}
