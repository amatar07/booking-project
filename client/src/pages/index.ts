import angular = require('angular')
import Home from './home'
import ItemEdit from './item-edit'
import ItemAdd from './item-add'
import View1 from './home/view1'
import BookingService from '../services/booking.service'

export default angular
  .module('pages', [])
  .component('home', Home)
  .component('itemEdit', ItemEdit)
  .component('itemAdd', ItemAdd)
  .component('view1', View1)
  .service('bookingService', BookingService)
  .name
