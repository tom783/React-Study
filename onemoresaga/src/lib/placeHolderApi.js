import axios from "axios";

export default function placeHolderApi(query) {
  const placeApiInfo = {
    Url: "https://jsonplaceholder.typicode.com/",
    ApiOption: query
  };

  const reqUrl = `${placeApiInfo.Url}${placeApiInfo.ApiOption}`;
  return axios.get(reqUrl).catch(err => {
    return {
      error : true
    }
  });
}
