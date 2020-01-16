import axios from "axios";

const newsApiInfo = {
  KeyValue: "1234493630074dbebb52ac55b1bcdf03",
  Url: "https://newsapi.org/v2/top-headlines"
};

export default function newsApi(country) {
  const reqUrl = `${newsApiInfo.Url}?apiKey=${newsApiInfo.KeyValue}&country=${country}`;
  console.log(reqUrl);
  return axios.get(reqUrl).catch(err =>{
    return {
      error: true
    }
  });
}
