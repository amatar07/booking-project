import html from './index.html'
import './index.scss'


// export class ItemFormDirectiveController {

//   static $inject = ['$element', '$scope'];
//   constructor(public $element, public $scope: ItemFormDirectiveScope) {
//       $scope.vm = this;
//       console.log('///!!!!!!!!!!!///',this.$scope.model);
//   }
// }

// export interface ItemFormDirectiveScope extends ng.IScope {
//   bar: string;
//   vm: ItemFormDirectiveController;
// }


export default class ItemFormDirective {
  template = html
  restrict = 'E'
  // controller = ItemFormDirectiveController
  scope = {
    model: '=',
    service: '='
  };



  link(scope, elem, attr, ctrl) {
    // console.log(scope.model)
    // ctrl.model = scope.model;
    // console.log(scope.service())

    // scope.temp = scope.service();
  }
}


