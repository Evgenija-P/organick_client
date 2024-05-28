import { makeAutoObservable } from "mobx";

class NewsStore {
  news = [];

  constructor() {
    makeAutoObservable(this);
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
