import { makeAutoObservable, runInAction, action } from "mobx";
import { makePersistable } from "mobx-persist-store";

class NewsStore {
  news = [];

  constructor() {
    makeAutoObservable(this, {
      setNews: action,
      addNewsItem: action,
      removeNewsItem: action,
    });
    if (typeof window !== "undefined") {
      makePersistable(this, {
        name: "news",
        properties: ["news"],
        storage: window.localStorage,
      })
        .then(() => {
          runInAction(() => {
            this.news = Array.isArray(this.news) ? this.news : [];
          });
        })
        .catch(error => {
          console.error("Failed to make persistable:", error);
          runInAction(() => {
            this.news = [];
          });
        });
    }
  }

  setNews(news) {
    this.news = news;
  }

  addNewsItem(newsItem) {
    this.news.push(newsItem);
  }

  removeNewsItem(newsId) {
    this.news = this.news.filter(news => news.id !== newsId);
  }
}

const newsStore = new NewsStore();
export default newsStore;
