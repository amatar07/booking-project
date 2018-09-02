import angular = require('angular')
import Home from './home'
import ItemEdit from './item-edit'
import ItemAdd from './item-add'
import BookingService from '../services/booking.service'

export default angular
  .module('pages', [])
  .component('home', Home)
  .component('itemEdit', ItemEdit)
  .component('itemAdd', ItemAdd)
  .service('bookingService', BookingService)
  .name
