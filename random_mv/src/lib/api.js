import axios from "axios";
import { randomNumber } from "utils";

const photoKey = "2bd0d70f966b8191b6aaf00b962fcfc0";

export function getPhotoLib() {
  const APIkey = "2bd0d70f966b8191b6aaf00b962fcfc0";
  const URL = "https://api.themoviedb.org/3/";
  const APIoption = "search/movie";
  const language = "ko-KR";
  const query = "avengers";
  const reqURL = `${URL}${APIoption}?api_key=${APIkey}&language=${language}&query=${query}`;

  return axios.get(reqURL);
}

export function getPlaceHolder(postId = 1) {
  console.log(`func ${postId}`);
  let id = randomNumber();
  const url = `https://jsonplaceholder.typicode.com/todos/${id}`;

  return axios.get(url);
}
