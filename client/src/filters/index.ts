import angular = require('angular')
import shortenText from './shortenText'
import currency from './currency'

export default angular
  .module('filters', [])
  .filter('shortenText', () => shortenText)
  .filter('currency', () => currency)
  .name
