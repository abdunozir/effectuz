import axios from "axios";

const token = "LAEQ2GUBlv8tmxCdFRvq0NhiQrGgBJlEGifjvBz4e0ZHeJZ6Dg"

//valuta kurslari
const date = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`

const rubl = 'https://cbu.uz/uz/arkhiv-kursov-valyut/json/RUB/2022-07-26'
const usd = `https://cbu.uz/uz/arkhiv-kursov-valyut/json/USD/${date}`
const eur = `https://cbu.uz/uz/arkhiv-kursov-valyut/json/EUR/${date}`

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
const NEWS_TOP_10 = "https://simply.uz/api/more"


// Weather API
const weatherToken = '0400b796d3acd1ee1c6f3301a977c52f'
const weatherURL = 'https://api.openweathermap.org/data/2.5/'

const API = {

   // POST METHODS
   login: () => axios.post(LOGIN_URL, params),
   news_item: (params) => axios.post(NEWS_END, params, headers),

   // GET METHODS
   category: () => axios.get(CATEGORY_URL, headers),
   provence: () => axios.get(PROVENCE_URL, headers),
   config: () => axios.get(CONFIG_URL, headers),
   news_all: () => axios.get(NEWS_ALL_URL, headers),
   news_top_10: () => axios.get(NEWS_TOP_10, headers),
   //valuta kurslari
   rubl: async () => {
      const data = await axios.get(rubl)
      return data
    },

   // Weather
   weather: (city) => axios.get(`${weatherURL}weather?q=${city}&units=metric&APPID=${weatherToken}`)

}

export default API