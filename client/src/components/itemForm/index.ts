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

    scope.validTypeOfSales = true;

    scope.itemCopy = angular.copy(scope.item);
    scope.submitItem = function (a) {

      if (scope.editForm.$valid) {
        scope.item = angular.copy(scope.itemCopy);
      }
    }

    scope.validateFields = function (field) {
      switch (field) {
        case "typeOfSales": {
          if (scope.editForm.typeOfSales.$valid) {
            scope.validTypeOfSales = true;
          }else{
            console.log('should be false');

            scope.validTypeOfSales = false;
          }
          break;
        }
        case "B": {
          console.log("Good");
          break;
        }
        case "C": {
          console.log("Fair");
          break;
        }
        case "D": {
          console.log("Poor");
          break;
        }
        default: {
          console.log("Invalid choice");
          break;
        }
      }
    }
  }
}


