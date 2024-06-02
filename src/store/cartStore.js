import { validateFields } from "@/utils/validateFields";
import { makeAutoObservable, action } from "mobx";
import { createOrder } from "@/api/ordersAPI";

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
  deliveryCost = 0;
  totalCost = 0;
  orderNumber = "";
  orderId = "";

  constructor() {
    makeAutoObservable(this, {
      addToCart: action,
      removeFromCart: action,
      increaseQuantity: action,
      decreaseQuantity: action,
      updateTotalQuantity: action,
      updateTotalPrice: action,
      setOrderInfo: action,
      resetOrderField: action,
      resetErrors: action,
      clearOrderInfo: action,
      setDeliveryCost: action,
      updateTotalCost: action,
      submitOrder: action,
      loadFromLocalStorage: action,
      saveToLocalStorage: action,
    });
    this.loadFromLocalStorage();
  }

  addToCart(product) {
    const existingProduct = this.items.find(item => item._id === product._id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }
    this.updateTotalPrice();
    this.saveToLocalStorage();
  }

  quantityProduct(productId) {
    const existingProduct = this.items.find(item => item._id === productId);
    return existingProduct?.quantity;
  }

  removeFromCart(productId) {
    this.items = this.items.filter(item => item._id !== productId);
    this.updateTotalPrice();
    this.saveToLocalStorage();
  }

  increaseQuantity(productId) {
    const product = this.items.find(item => item._id === productId);
    if (product) {
      product.quantity += 1;
      this.updateTotalPrice();
      this.saveToLocalStorage();
    }
  }

  decreaseQuantity(productId) {
    const product = this.items.find(item => item._id === productId);
    if (product) {
      if (product.quantity > 1) {
        product.quantity -= 1;
      } else {
        this.removeFromCart(productId);
      }
      this.updateTotalPrice();
      this.saveToLocalStorage();
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
    this.updateTotalCost();
  }

  setOrderInfo(field, value) {
    this.orderInfo[field] = value;
    this.validateOrderInfo();
    this.saveToLocalStorage();
  }

  validateOrderInfo() {
    const emptyFields = validateFields(this.orderInfo);
    this.errors = emptyFields.length > 0 ? emptyFields : [];
  }

  resetOrderField(field) {
    this.orderInfo[field] = "";
    this.saveToLocalStorage();
  }

  resetErrors() {
    this.errors = [];
  }

  clearOrderInfo() {
    Object.keys(this.orderInfo).forEach(key => {
      this.orderInfo[key] = "";
    });
    this.saveToLocalStorage();
  }

  setDeliveryCost(cost) {
    this.deliveryCost = cost;
    this.updateTotalCost();
    this.saveToLocalStorage();
  }

  updateTotalCost() {
    this.totalCost = this.totalPrice + this.deliveryCost;
  }

  async submitOrder() {
    this.validateOrderInfo();
    if (this.errors.length > 0) {
      return false;
    }

    const orderData = {
      ...this.orderInfo,
      products: this.items.map(item => ({
        product: item._id,
        quantity: item.quantity,
      })),
      summa: this.totalPrice,
      delivery_cost: this.deliveryCost,
      total_cost: this.totalCost,
    };

    try {
      const response = await createOrder(orderData);
  
      this.clearOrderInfo();
      this.items = [];
      this.orderNumber = response.order_number;
      this.orderId = response._id;

      this.updateTotalPrice();
      this.saveToLocalStorage();
      return true;
    } catch (error) {
      console.error("Error submitting order:", error);
      return false;
    }
  }

  saveToLocalStorage() {
    if (typeof window !== "undefined") {
      const state = {
        items: this.items,
        orderInfo: this.orderInfo,
        totalQuantity: this.totalQuantity,
        totalPrice: this.totalPrice,
        deliveryCost: this.deliveryCost,
        totalCost: this.totalCost,
      };
      window.localStorage.setItem("CartStore", JSON.stringify(state));
    }
  }

  loadFromLocalStorage() {
    if (typeof window !== "undefined") {
      const savedState = window.localStorage.getItem("CartStore");
      if (savedState) {
        const state = JSON.parse(savedState);
        this.items = state.items || [];
        this.orderInfo = state.orderInfo || this.orderInfo;
        this.totalQuantity = state.totalQuantity || 0;
        this.totalPrice = state.totalPrice || 0;
        this.deliveryCost = state.deliveryCost || 0;
        this.totalCost = state.totalCost || 0;
      }
    }
  }
}

const cartStore = new CartStore();
export default cartStore;
