import axios from "axios";
// test parameter : business
export function getApi(category) {
  return axios.get(
    `https://newsapi.org/v2/top-headlines?country=kr&apiKey=1234493630074dbebb52ac55b1bcdf03&category=${category}`
  );
}
