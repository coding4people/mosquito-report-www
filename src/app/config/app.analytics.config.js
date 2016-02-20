export default function analyticsConfig($analyticsProvider, ConfigProvider) {
  'ngInject';

  let config = ConfigProvider.$get();

  $analyticsProvider.developerMode(config.debug);
}

