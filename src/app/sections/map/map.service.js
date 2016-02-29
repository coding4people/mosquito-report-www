export default class MapService {
  constructor(Restangular) {
    'ngInject';

    this.Restangular = Restangular;
  }

  getZoneFocus(latitude, longitude) {
    // TODO @infodark -- change this to square method
    return this.Restangular.one(`focus/query-center`).customPOST({
      latlon: `${latitude},${longitude}`
    });
  }
}
