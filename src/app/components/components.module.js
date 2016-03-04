import mapHelper from './mapHelper/mapHelper.module';
import localStorage from './localStorage/localStorage.module';
import formUtilities from './formUtilities/formUtilities.module';

export default angular.module('mosquito.components', [
  mapHelper.name,
  localStorage.name,
  formUtilities.name
]);
