import authentication from './authentication/authentication.module';
import calendar from './calendar/calendar.module';
import customers from './customers/customers.module';
import professionals from './professionals/professionals.module';
import resolvers from './resolvers/resolvers.module';
import services from './services/services.module';
import search from './search/search.module';
import SectionsController from './sections.controller';
import settings from './settings/settings.module';
import error from './errors/errors.module';
import route from './sections.route';

export default angular.module('vanidayMerchant.sections', [
    authentication.name,
    calendar.name,
    customers.name,
    professionals.name,
    resolvers.name,
    services.name,
    search.name,
    settings.name,
    error.name
  ])
  .controller('SectionsController', SectionsController)
  .config(route);
