import axios from "axios";

const token = "434gW_nyNC_BsHlO3HO8OQP9aoFBNSY0rLCG602CEgWpz271Dk"

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
const NEWS_END = "https://simply.uz/api/news-end?count=4";
const PROVENCE_URL = "https://simply.uz/api/provence"
const CONFIG_URL = "https://simply.uz/api/config"
const NEWS_ALL_URL = "https://simply.uz/api/news-all"
const NEWS_ITEM_URL = "https://simply.uz/api/new?id"


// Weather API
const weatherToken = '1f02228152febb84ea0c86f21041ee0f'
const weatherURL = 'https://api.openweathermap.org/data/2.5/weather'

const API = {

   // POST METHODS
   login: () => axios.post(LOGIN_URL, params),

   // GET METHODS
   category: () => axios.get(CATEGORY_URL, headers),
   provence: () => axios.get(PROVENCE_URL, headers),
   config: () => axios.get(CONFIG_URL, headers),
   news_all: () => axios.get(NEWS_ALL_URL, headers),
   news_item: () => axios.post(NEWS_END, headers),

   //valuta kurslari
   rubl: async () => {
      const data = await axios.get(rubl)
      return data
    },

   // Weather
   weather: async (query) => {
      const data = await axios.get(weatherURL, { params: {
         q: query,
         units: 'metric',
         APPID: weatherToken,
     }})
     return data
   }
}

export default API