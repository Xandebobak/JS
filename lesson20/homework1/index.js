class Order {
  constructor(price, city, type) {
    this.id = Math.random().toString(36).substr(2, 9);
    this.dateCreated = new Date();
    this.dateConfirmed = null;
    this.isConfirmed = false;
    this.price = price;
    this.city = city;
    this.type = type;
  }

  checkPrice() {
    return this.price > 1000;
  }

  isValidType() {
    return this.type === "Buy" || this.type === "Sell";
  }

  confirmOrder() {
    if (!this.isConfirmed) {
      this.isConfirmed = true;
      this.dateConfirmed = new Date();
    }
  }
}
const order = new Order(1500, "Lviv", "Buy");
console.log(order.checkPrice());
console.log(order.isValidType());
order.confirmOrder();
console.log(order.isConfirmed);
