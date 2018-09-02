

export default class HomeCtrl {

  static $inject = ['bookingService', '$state']

  bookingData: any = [];
  sortColumn: string = "amount";
  reverseSort: boolean = true;

  /**
   * te be accessed when component is initialized
   * @param bookingService common service to retrieve table values
   * @param state navigation service for actions
   */
  constructor(private bookingService, private $state) {
    //
    if (this.bookingService.bookingData.length < 1) {
      this.bookingService.getData().then((response) => {
        this.bookingData = response;

      });
    } else {
      this.bookingData = this.bookingService.bookingData;
    }
  }
  /**
   * sending current selected item to service 
   * @param item current object item being selected to edit
   */
  navigateEdit(item): void {
    this.bookingService.setCurrentItem(item);
    this.$state.go('itemEdit', { id: item.id });
  }

  /**
   * deleting item from common service
   * @param selectedItem selected object to be deleted
   */
  deleteItem(selectedItem): void {

    this.bookingService.deleteItem(selectedItem);
  }

  /**
   * sorting method addition of classes for arrow sort
   * @param column name of column to add arrow class
   */
  getSortClass(column) {

    if (this.sortColumn == column) {
      return this.reverseSort
        ? 'arrow-down'
        : 'arrow-up';
    }

    return '';
  }

  /**
   * toggle sorting values on clikcing
   * @param column name of column to sort
   */
  sortData(column) {
    this.reverseSort = (this.sortColumn == column) ? !this.reverseSort : false;
    this.sortColumn = column;
  }
}

