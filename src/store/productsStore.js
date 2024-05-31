import { getAllProducts } from "@/api/productsAPI";
import { makeAutoObservable, runInAction, action } from "mobx";
import { makePersistable } from "mobx-persist-store";

class ProductsStore {
  products = [];

  constructor() {
    makeAutoObservable(this, {
      setProducts: action,
      addProduct: action,
      removeProduct: action,
      getProducts: action.bound,
    });
    if (typeof window !== "undefined") {
      makePersistable(this, {
        name: "products",
        properties: ["products"],
        storage: window.localStorage,
      })
        .then(() => {
          runInAction(() => {
            this.products = Array.isArray(this.products) ? this.products : [];
          });
        })
        .catch(error => {
          console.error("Failed to make persistable:", error);
          runInAction(() => {
            this.products = [];
          });
        });
    }
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

  async getProducts() {
    try {
      const result = await getAllProducts();

      runInAction(() => {
        if (!result.error) {
          this.products = result;
        }
      });
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  }
}

const productsStore = new ProductsStore();
export default productsStore;
