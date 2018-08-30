import angular = require('angular')
import Home from './home'
import ItemEdit from './todo-list'
import View1 from './home/view1'
import log from '../services/log.service'

export default angular
  .module('pages', [])
  .component('home', Home)
  .component('itemEdit', ItemEdit)
  .component('view1', View1)
  .service('log', log)
  .name
