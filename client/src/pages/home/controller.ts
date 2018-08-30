

export default class HomeCtrl {

  static $inject = ['log', '$state']

  bookingData: any = [];
  sortColumn: string = "amount";
  reverseSort: boolean = true;

  constructor(private log, private $state) {
    if (this.log.bookingData.length<1) {
      this.log.getData().then((response) => {
        this.bookingData = response;

      });
    } else {
      this.bookingData = this.log.bookingData;
    }
  }
  navigateEdit(item): void {
    this.log.setCurrentItem(item);
    this.$state.go('itemEdit', { id: item.id });
  }


  editItem(item, index): void {

  }

  deleteItem(selectedItem, index): void {

    var filtered = this.bookingData.filter(function (item) {
      return item.id !== selectedItem.id;
    });
    this.bookingData = filtered;
  }

  getSortClass(column) {

    if (this.sortColumn == column) {
      return this.reverseSort
        ? 'arrow-down'
        : 'arrow-up';
    }

    return '';
  }

  sortData(column) {
    this.reverseSort = (this.sortColumn == column) ? !this.reverseSort : false;
    this.sortColumn = column;
  }
}

