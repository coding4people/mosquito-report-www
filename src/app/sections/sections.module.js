import main from './main/main.module';
import authentication from './authentication/authentication.module';
import map from './map/map.module';
import profile from './profile/profile.module';
import errors from './errors/errors.module';
import route from './sections.route';

export default angular.module('mosquito.sections', [
    main.name,
    authentication.name,
    map.name,
    errors.name,
    profile.name
  ])
  .config(route);
