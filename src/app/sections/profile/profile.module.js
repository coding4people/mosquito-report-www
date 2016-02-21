import controller from './profile.controller';
import routeConfig from './profile.route';
import editProfileModule from './editProfile/editProfile.module'

export default angular.module('mosquito.sections.profile', [
    editProfileModule.name
  ])
  .config(routeConfig)
  .controller('ProfileController', controller);
