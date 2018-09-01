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
    scope.validBookingText = true;
    scope.validDate = true;
    scope.validAmount = true;
    scope.customMessageAmount = "*Please enter a valid number"


    scope.itemCopy = angular.copy(scope.item);
    scope.submitItem = function (a) {

      if (scope.editForm.$valid) {
        scope.item = angular.copy(scope.itemCopy);
      }
    }

    scope.validateFields = function (field) {
      switch (field) {
        case "typeOfSales": {
          scope.validateTypeOfSales();
          break;
        }
        case "bookingText": {
          scope.validateBookingText();
          break;
        }
        case "date": {
          scope.validateDate();
          break;
        }
        case "amount": {
          scope.validateAmount();
          break;
        }
        default: {
          console.log("Invalid choice");
          break;
        }
      }
    }


    scope.validateTypeOfSales = function (field) {
      if (scope.editForm.typeOfSales.$valid) {
        scope.validTypeOfSales = true;
      } else {
        scope.validTypeOfSales = false;
      }
    }

    scope.validateBookingText = function (field) {
      if (scope.editForm.bookingText.$valid) {
        scope.validBookingText = true;
      } else {
        scope.validBookingText = false;
      }
    }
    scope.validateDate = function (field) {
      if (scope.editForm.date.$valid) {
        scope.validDate = true;
      } else {
        scope.validDate = false;
      }
    }
    scope.validateAmount = function (field) {

      let amount = scope.editForm.amount.$viewValue.replace(/\,/g, ''); // 1125, but a string, so convert it to number
      amount = parseFloat(amount);
      let isValid = true;
      if (scope.editForm.amount.$valid) {

        if (amount < 50 || amount > 20000000) {
          scope.customMessageAmount = "*Please enter an amount between 50 and 20000000";
          isValid = false;
        } else {
          isValid = true;
        }
      } else {
        scope.customMessageAmount = "*Please enter a valid number"
        isValid = false;
      }
      scope.validAmount = isValid;

    }

  }
}


