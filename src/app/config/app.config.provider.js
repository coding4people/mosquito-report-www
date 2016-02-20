import config from '../../../config';

export default class ConfigProvider {
  constructor() {
    'ngInject';

    this.config = config;
  }

  $get() {
    return this.config;
  }
}
