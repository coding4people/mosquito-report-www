export default function FacebookConfigProvider (ConfigProvider, FacebookProvider) {
  'ngInject';

  let config = ConfigProvider.$get();

  FacebookProvider.init(config.facebookToken);
}
