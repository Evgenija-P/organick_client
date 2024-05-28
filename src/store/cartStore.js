import { validateFields } from "@/utils/validateFields";
import { makeAutoObservable, toJS } from "mobx";

class CartStore {
  items = [];
  orderInfo = {
    first_name: "",
    last_name: "",
    country: "",
    city: "",
    street: "",
    apartment: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
    message: "",
  };
  errors = [];
  totalQuantity = 0;
  totalPrice = 0;

  constructor() {
    makeAutoObservable(this);
  }

  addToCart(product) {
    const existingProduct = this.items.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.items.push({ ...product });
    }
    this.updateTotalPrice();
  }

  quantityProduct(productId) {
    const existingProduct = this.items.find(item => item.id === productId);

    return existingProduct?.quantity;
  }

  removeFromCart(id) {
    this.items = this.items.filter(item => item.id !== id);
    this.updateTotalPrice();
  }

  increaseQuantity(id) {
    const product = this.items.find(item => item.id === id);
    if (product) {
      product.quantity += 1;
      this.updateTotalPrice();
    }
  }

  decreaseQuantity(id) {
    const product = this.items.find(item => item.id === id);
    if (product) {
      if (product.quantity > 1) {
        product.quantity -= 1;
      } else {
        this.removeFromCart(id);
      }
      this.updateTotalPrice();
    }
  }

  updateTotalQuantity() {
    if (!this.items) {
      return 0;
    }
    this.totalQuantity = this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  updateTotalPrice() {
    if (!this.items) {
      return 0;
    }
    this.totalPrice = this.items.reduce((sum, item) => {
      const price = item.current_price || item.old_price;
      return sum + price * item.quantity;
    }, 0);
    this.updateTotalQuantity();
  }

  setOrderInfo(field, value) {
    this.orderInfo[field] = value;
    this.validateOrderInfo();
  }

  validateOrderInfo() {
    const emptyFields = validateFields(this.orderInfo);
    this.errors = emptyFields.length > 0 ? emptyFields : [];
  }

  resetOrderField(field) {
    this.orderInfo[field] = "";
  }

  resetErrors() {
    this.errors = [];
  }

  clearOrderInfo() {
    Object.keys(this.orderInfo).forEach(key => {
      this.orderInfo[key] = "";
    });
  }
}

const cartStore = new CartStore();
export default cartStore;
