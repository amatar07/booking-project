import angular = require('angular')
import Root from './Root'
import ItemForm from './itemForm'


export default angular
  .module('components', [])
  .component('root', Root)
  .directive('itemForm', () => new ItemForm()) 
  .name


