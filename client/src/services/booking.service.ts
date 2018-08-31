class BookingService {
  bookingData: any = [];
  static $inject = ['$http'];
  currentItem: any;
  constructor(private $http: ng.IHttpService) { }

  info(info) {
    alert(info)
  }

  submitEditItem(item) {
    console.log("get here")
    let findItem = this.bookingData.find(e => e.id == item.id);
    findItem = item;
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
