class BookingService {
  //common object containing all booking date
  bookingData: any = [];
  //injecting http 
  static $inject = ['$http'];
  //current selected item for any action
  currentItem: any;

  /**
   * accessed when service is initialzied singleton
   * @param  $http to be able to make server requests
   */
  constructor(private $http: ng.IHttpService) {
  }

  /**
   * saving the edit object to our common array
   * @param item object containing values for edited field
   */
  submitEditItem(item) {
    let findItemIndex = this.bookingData.findIndex(e => e.id == item.id);
    this.bookingData[findItemIndex] = item;
  }

  /**
   * adding new object with auto generated id
   * @param item new object created is being added
   */
  submitAddItem(item) {
    let maxValueId = this.getMaxIdPlusOne(this.bookingData, 'id');
    item.id = maxValueId;
    this.bookingData.push(item);
  }

  /**
   * retrieving maximum value of property to generate a unique string
   * @param arr array to search
   * @param prop property inside json to find max value
   */
  getMaxIdPlusOne(arr, prop) {
    var max;
    for (var i = 0; i < arr.length; i++) {
      if (!max || parseInt(arr[i][prop]) > parseInt(max[prop]))
        max = arr[i];
    }
    return max.id + 1;
  }

  /**
   * deleting an item from common object
   * @param selectedItem object to be removed 
   */
  deleteItem(selectedItem): void {
    let findItemIndex = this.bookingData.findIndex(e => e.id == selectedItem.id);
    this.bookingData.splice(findItemIndex, 1);
  }

  /**
   * setting selected object
   * @param item setting item to be selected
   */
  setCurrentItem(item) {
    this.currentItem = item;
  }
  /**
   * getting selected object
   * @param item getting current selected item 
   */
  getCurrentItem() {
    return this.currentItem;
  }

  /**
   * retrieving booking data from server
   */
  getData() {
    return this.$http.get('http://localhost:5000/api/account-sales').then((response) => {
      this.bookingData = response.data;
      return this.bookingData;
    });;
  }
}

export default BookingService
