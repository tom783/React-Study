import axios from "axios";

const movieApiInfo = {
  KeyValue: "2bd0d70f966b8191b6aaf00b962fcfc0",
  Url: "https://api.themoviedb.org/3/",
  ApiOption: "search/movie",
  Language: "ko-KR"
};

export default function movieApi(query) {
  const reqURL = `${movieApiInfo.Url}${movieApiInfo.ApiOption}?api_key=${movieApiInfo.KeyValue}&language=${movieApiInfo.Language}&query=${query}`;
  return axios.get(reqURL).catch(err=>{
    return {
      error:true
    }
  });
}
