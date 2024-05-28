import { makeAutoObservable } from "mobx";

class CartStore {
  items = [];
  orderInfo = {};

  constructor() {
    makeAutoObservable(this);
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(itemId) {
    this.items = this.items.filter(item => item.id !== itemId);
  }

  updateItemQuantity(itemId, quantity) {
    const item = this.items.find(item => item.id === itemId);
    if (item) {
      item.quantity = quantity;
    }
  }

  setOrderInfo(info) {
    this.orderInfo = info;
  }

  clearCart() {
    this.items = [];
    this.orderInfo = {};
  }

  get totalPrice() {
    return this.items.reduce((total, item) => {
      const price = item.promoPrice ? item.promoPrice : item.price;
      return total + price * item.quantity;
    }, 0);
  }
}

const cartStore = new CartStore();
export default cartStore;
