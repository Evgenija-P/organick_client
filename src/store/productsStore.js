import { makeAutoObservable } from "mobx";

class ProductsStore {
  products = [];

  constructor() {
    makeAutoObservable(this);
  }

  setProducts(products) {
    this.products = products;
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(productId) {
    this.products = this.products.filter(product => product.id !== productId);
  }
}

const productsStore = new ProductsStore();
export default productsStore;
