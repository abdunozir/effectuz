import axios from "axios";

const token = "LAEQ2GUBlv8tmxCdFRvq0NhiQrGgBJlEGifjvBz4e0ZHeJZ6Dg"

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

const CATEGORY = "https://simply.uz/api/category";                 // bo'limlar
const PROVENCE = "https://simply.uz/api/provence";                 // hududlar
const CONFIG = "https://simply.uz/api/config";                     // sosical tarmoqlar
const NEWS_ALL = "https://simply.uz/api/news-all";                 // barcha yangiliklar
const NEW = "https://simply.uz/api/new?id";                        // 1ta yangilikni qaytaradi newsInfo
const NEWS_VIDEO = "https://simply.uz/api/news-video";             // faqat videolar yuboradi
const REPORTER = "https://simply.uz/api/reporter?id=6";            // 1ta xodim haqida malumot beradi
const MORE = "https://simply.uz/api/more";                         // Eng ko'p o'qilganlar
const VOICE_ONE = "https://simply.uz/api/voice-one?id=1";          // 1ta audio news qaytaradi
const VOICES = "https://simply.uz/api/voices";                     // all audio newslarni qaytaradi
const NEWS_CATEGORY = "https://simply.uz/api/news-category?id=2";  // catergoryalarga oid yangilklarnni chiqarish
const NEWS_PROVENCE = "https://simply.uz/api/news-provence?id=2";  // viloyatlar bo'yicha yangilklarni qaytaradi


const GET = {
  category: () => axios.get(CATEGORY, headers),
  provence: () => axios.get(PROVENCE, headers),
  config: () => axios.get(CONFIG, headers),
  news_all: () => axios.get(NEWS_ALL, headers),
  new: (id) => axios.get(`${NEW}=${id}`, headers),
  news_video: () => axios.get(NEWS_VIDEO, headers),
  reporter: () => axios.get(REPORTER, headers),
  news_top_10: () => axios.get(MORE, headers),
  voice_one: () => axios.get(VOICE_ONE, headers),
  voices: () => axios.get(VOICES, headers),
  news_category: () => axios.get(NEWS_CATEGORY, headers),
  news_provence: () => axios.get(NEWS_PROVENCE, headers),
}

export default GET;