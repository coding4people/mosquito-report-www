export default function getTLD($window) {
  'ngInject';

  var hostName = $window.location.hostname;
  var hostNameArray = hostName.split('.');
  var posOfTld = hostNameArray.length - 1;
  var tld = hostNameArray[posOfTld];

  return tld;
}
