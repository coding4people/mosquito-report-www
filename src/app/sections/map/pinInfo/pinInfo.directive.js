export default function PinInfoDirective(CurrentLocale) {
  'ngInject';

  let lang = CurrentLocale.locale;

  let directive = {
    scope: {
      pinSelected: '=',
      showPinInfoToggle: '='
    },
    templateUrl: `app/sections/map/pinInfo/pinInfo.${lang}.html`,
    controller: 'PinInfoController',
    controllerAs: 'pinInfoController',
    bindToController: true
  };

  return directive;
}
