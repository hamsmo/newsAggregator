import axios from "axios";

class News {
  public static async getNews(searchTerm: string) {
    try {
      return await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&q=${searchTerm}&apiKey=00c39925d6d54290957bc436e4adabf6`
      );
    } catch (error) {
      return Promise.reject(error);
    }
  }
  public static async getGuardian(searchTerm: string) {
    try {
      return await axios.get(
        `https://content.guardianapis.com/search?q=${searchTerm}&show-fields=byline&api-key=71a6c0d7-eb37-4b67-a799-63cdb3a24c2b`
      );
    } catch (error) {
      return Promise.reject(error);
    }
  }

  // public static async getNewyorkTimes(searchTerm: string, date: string) {
  public static async getNewyorkTimes(
    searchTerm: string,
    date?: Date | null
  ) {
    try {
      return await axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=source:("The New York Times") AND headline:("${searchTerm}")&from=${date}&api-key=9HKaJ0YwMGekebUCci3sO0h1GmXSVnA8`
        // `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${date}&fq=source:("The New York Times") AND headline:("${searchTerm}")&api-key=9HKaJ0YwMGekebUCci3sO0h1GmXSVnA8`
      );
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default News;
