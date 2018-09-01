
export default class ItemAddCtrl {
  static $inject = ['bookingService', '$state']

  currentItem: any;

  constructor(private bookingService, private $state) {

  }

  submitAddItem() {
    this.bookingService.submitAddItem(this.currentItem);
    this.$state.go('home');
  }
}
