class BookingService {
  bookingData: any = [];
  static $inject = ['$http'];
  currentItem: any;
  constructor(private $http: ng.IHttpService) { }

  info(info) {
    alert(info)
  }

  submitEditItem(item) {
    let findItemIndex = this.bookingData.findIndex(e => e.id == item.id);
    this.bookingData[findItemIndex] = item;
  }

  deleteItem(selectedItem): void {
    let findItemIndex = this.bookingData.findIndex(e => e.id == selectedItem.id);
    this.bookingData.splice(findItemIndex, 1);
  }

  setCurrentItem(item) {
    this.currentItem = item;
  }

  getCurrentItem(item) {
    return this.currentItem;
  }

  getData() {
    return this.$http.get('http://localhost:5000/api/account-sales').then((response) => {
      this.bookingData = response.data;
      return this.bookingData;
    });;
  }
}

export default BookingService
