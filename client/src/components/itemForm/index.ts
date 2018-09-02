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
    scope.customMessageDate = "*Please enter a valid format 'dd.mm.yyyy'"

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


    scope.validateTypeOfSales = function () {
      if (scope.editForm.typeOfSales.$valid) {
        scope.validTypeOfSales = true;
      } else {
        scope.validTypeOfSales = false;
      }
    }

    scope.validateBookingText = function () {

      if (scope.editForm.bookingText.$valid) {
        scope.validBookingText = true;
      } else {
        scope.validBookingText = false;
      }
    }

    scope.validateDate = function () {

      let tempDate = new Date();
      console.log(tempDate);

      console.log(tempDate.getDate(), 'mponth' ,tempDate.getMonth(), tempDate.getFullYear());
      let isValid = true;
      if (scope.editForm.date.$valid) {

        let dateYear;
        if (scope.editForm.date.$viewValue) {
          let date = scope.editForm.date.$viewValue.split(".");
          if (date[2]) {
            dateYear = date[2];
          }
        }

        if (dateYear < 1900) {
          scope.customMessageDate = "*Date must be after 1900";
          isValid = false;
        } else if (dateYear){
          //let day = getDate();
          console.log('hello ', tempDate);
        }
          else if (dateYear > 20000000) {
          scope.customMessageDate = "*Maximum amount is 20000000";
          isValid = false;

        } else {
          isValid = true;
        }
      } else {
        scope.customMessageDate = "*Please enter a valid format 'dd.mm.yyyy'"
        isValid = false;
      }
      scope.validDate = isValid;

    }


    scope.validateAmount = function () {

      let amount;
      if (scope.editForm.amount.$viewValue) {
        amount = scope.editForm.amount.$viewValue.replace(/\,/g, '');
        amount = parseFloat(amount);
      }
      let isValid = true;
      if (scope.editForm.amount.$valid) {

        if (amount < 50) {
          scope.customMessageAmount = "*Minimum amount is 50";
          isValid = false;
        } else if (amount > 20000000) {
          scope.customMessageAmount = "*Maximum amount is 20000000";
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


