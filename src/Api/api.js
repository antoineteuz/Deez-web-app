import axios from "axios";

class API {
  constructor() {
    this.axios = axios.create({
      baseURL: "https://cors-anywhere.herokuapp.com/https://api.deezer.com/"
    });
  }

  searchTracks(value) {
    return this.axios.get("search?q=" + value, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}

/**
 * Generic Method to make a GET on Deezer API
 * Method to call on actions (Album, Artist, Track)
 *
 * @param {route} path
 * @param {value of the request} value
 */
function GetEntity(path, value) {
  API.get(path + value, {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS"
    }
  })
    .then(res => {
      console.log(res.name);
    })
    .catch(error => {
      console.log(error);
    });
}

const api = new API();

export default api;
