import controller from './editProfile.controller';
import routeConfig from './editProfile.route';

export default angular.module('mosquito.sections.profile.editProfile', [])
  .config(routeConfig)
  .controller('EditProfileController', controller);
