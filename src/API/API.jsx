import axios from "axios";

const token = "LVcBSgsFNPKYrdw4AXxjoZD-gB98y2AhxqFr-YQ0b7XK30V-1W"

const headers = {
   headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": `Bearer ${token}`
   }
}

const params = {
   username: "api",
   password: "apiapiapi"
}

const LOGIN_URL = "https://simply.uz/api/login";
const CATEGORY_URL = "https://simply.uz/api/category"
const NEWS_END = "https://simply.uz/api/news-end?count";
const PROVENCE_URL = "https://simply.uz/api/provence"
const CONFIG_URL = "https://simply.uz/api/config"
const NEWS_ALL_URL = "https://simply.uz/api/news-all"
const NEWS_ITEM_URL = "https://simply.uz/api/new?id"

const API = {

   // POST METHODS
   login: () => axios.post(LOGIN_URL, params),

   // GET METHODS
   category: () => axios.get(CATEGORY_URL, headers),
   provence: () => axios.get(PROVENCE_URL, headers),
   config: () => axios.get(CONFIG_URL, headers),
   news_all: () => axios.get(NEWS_ALL_URL, headers),
   news_item: (ID) => axios.get(`${NEWS_ITEM_URL}=${ID}`, headers)


}

export default API