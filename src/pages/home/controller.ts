import { BOOKING_DATA } from '../../constants/defines';


export default class HomeCtrl {

  bookingData = BOOKING_DATA;
  sortColumn = "amount";
  reverseSort = false;

  constructor(private log) {
    console.log(this.bookingData);
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
    console.log(column);
    this.reverseSort = (this.sortColumn == column) ? !this.reverseSort : false;
    this.sortColumn = column;
  }

  sortByDate(): void {

  }
  sortByAmount(): void {

  }
}

