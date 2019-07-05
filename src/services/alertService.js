import http from "./httpService";
import {
  apiUrl
} from "../config/default.json";

const apiEndpoint = apiUrl + "/v2/alerts_events.json";

function movieUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getEvents() {
  return http.get(apiEndpoint);
}

export function getMovie(movieId) {
  return http.get(movieUrl(movieId));
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = {
      ...movie
    };
    delete body._id;
    return http.put(movieUrl(movie._id), body);
  }

  return http.post(apiEndpoint, movie);
}

export function deleteMovie(movieId) {
  return http.delete(movieUrl(movieId));
}