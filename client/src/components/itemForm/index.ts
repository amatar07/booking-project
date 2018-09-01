import html from './index.html'
import './index.scss'
import angular = require('angular')

export default class ItemFormDirective {

  template = html
  restrict = 'E'

  scope = {
    item: '=',
    service: '&'
  };

  link(scope, elem, attr) {

    scope.itemCopy = angular.copy(scope.item);
    scope.submitItem = function (a) {

      console.log(scope.editForm.$valid);
      if (scope.editForm.$valid) {
        scope.item = angular.copy(scope.itemCopy);
      }
    }
  }
}


