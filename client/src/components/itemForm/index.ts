import html from './index.html'
import './index.scss'
import angular = require('angular')

/**
 * Creating a generic form with a dynamic callback submit button
 */
export default class ItemFormDirective {

  template = html
  restrict = 'E'

  scope = {
    item: '=',
    service: '&'
  };

  link(scope, elem, attr) {

    // fields for validation
    scope.validTypeOfSales = true;
    scope.validBookingText = true;
    scope.validDate = true;
    scope.validAmount = true;
    scope.customMessageAmount = '*Please enter a valid number format x,xxx.xx';
    scope.customMessageDate = "*Please enter a valid format 'dd.mm.yyyy'";
    // changing scope till user clicks confirm to avoid two way binding
    scope.itemCopy = angular.copy(scope.item);
    scope.submitItem = function (a) {

      if (scope.editForm.$valid) {
        scope.item = angular.copy(scope.itemCopy);
      }
    }

    /**
     * Validating all fields in the form based on input name
     * @field input name for the text field
     */
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

    /**
     * Validating type of sales field
     * condition for initial check only
     */
    scope.validateTypeOfSales = function () {
      if (scope.editForm.typeOfSales.$valid) {
        scope.validTypeOfSales = true;
      } else {
        scope.validTypeOfSales = false;
      }
    }

    /**
     * Validating booking text field
     * condition for initial check only
     */
    scope.validateBookingText = function () {

      if (scope.editForm.bookingText.$valid) {
        scope.validBookingText = true;
      } else {
        scope.validBookingText = false;
      }
    }

    /**
     * Date validation
     * being greater than 1900
     * not a future or a current date with custom messages
     * matching pattern xx.xx.xxxx
     */
    scope.validateDate = function () {

      let tempDate = new Date();
      tempDate.setHours(0, 0, 0, 0)

      let isValid = true;
      if (scope.editForm.date.$valid) {

        let dateYear;
        let date;
        date = scope.editForm.date.$viewValue.split(".");
        dateYear = date[2];

        if (dateYear <= 1900) {
          scope.customMessageDate = "*Date must be after 1900";
          isValid = false;
        } else if (scope.editForm.date.$viewValue) {
          let newDate = new Date(date[2], date[1] - 1, date[0]);
          newDate.setHours(0, 0, 0, 0)

          if (newDate >= tempDate) {
            scope.customMessageDate = "*Date cannot be equal to or more than current date";
            isValid = false;

          }
        } else {
          isValid = true;
        }
      } else {
        scope.customMessageDate = "*Please enter a valid format 'dd.mm.yyyy'"
        isValid = false;
      }
      scope.validDate = isValid;

    }

    /**
     * validating amount 
     * greater than 50 and less than 20,000,000
     * matching pattern xx,xxx.xx
     */
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
        scope.customMessageAmount = "*Please enter a valid number format x,xxx.xx"
        isValid = false;
      }
      scope.validAmount = isValid;

    }

  }
}


