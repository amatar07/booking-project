
export default class ItemEditCtrl {
  static $inject = ['bookingService', '$filter', '$state']

  currentItem: any;

  /**
   * method accessed once component is created, setting date object to be able to edit the field
   * @param bookingService common service to retrieve objects
   * @param $filter apply angular filter to date 
   * @param $state being able to navigate using angular router
   */
  constructor(private bookingService, private $filter, private $state) {
    this.currentItem = this.bookingService.getCurrentItem();
    this.currentItem.date = new Date(this.currentItem.date);
    this.currentItem.date = this.$filter('date')(this.currentItem.date, 'dd.MM.yyyy');
  }

  /**
   * navigating to home after editing an item
   */
  submitEditItem() {
    this.bookingService.submitEditItem(this.currentItem);
    this.$state.go('home');
  }
}
