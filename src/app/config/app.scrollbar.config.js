export default function scrollbarConfig (ScrollBarsProvider) {
  'ngInject';

  ScrollBarsProvider.defaults = {
    scrollButtons: {
      scrollAmount: 'auto',
      enable: true
    },
    scrollInertia: 400,
    axis: 'y',
    theme: 'minimal',
    autoHideScrollbar: true
  };
}
