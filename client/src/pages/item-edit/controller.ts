
export default class ItemEditCtrl {
  static $inject = ['bookingService', '$filter', '$state']

  currentItem: any;

  constructor(private bookingService, private $filter, private $state) {
    this.currentItem = this.bookingService.getCurrentItem();
    this.currentItem.date = new Date(this.currentItem.date);
    this.currentItem.date = this.$filter('date')(this.currentItem.date, 'dd.MM.yyyy');

  }

  submitEditItem() {
    this.bookingService.submitEditItem(this.currentItem);
    this.$state.go('home');
  }
}
