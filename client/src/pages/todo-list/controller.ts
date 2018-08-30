export default class TodoListCtrl {
  static $inject = ['log', '$filter', '$state']

  currentItem: any;

  constructor(private log, private $filter, private $state) {
    this.currentItem = this.log.getCurrentItem();
    this.currentItem.date = new Date(this.currentItem.date);
    //this.currentItem.date = this.$filter('date')(this.currentItem.date, 'dd.MM.yyyy');
  }

  submitEditItem() {
    console.log('ooooo',this.currentItem)
    this.log.submitEditItem(this.currentItem);
    this.$state.go('home');
  }
}
