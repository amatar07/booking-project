import angular = require('angular')
import shortenText from './shortenText'

export default angular
  .module('filters', [])
  .filter('shortenText', () => shortenText)
  .name
