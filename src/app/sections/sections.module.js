import main from './main/main.module';
import route from './sections.route';

export default angular.module('mosquito.sections', [
    main.name
  ])
  .config(route);
