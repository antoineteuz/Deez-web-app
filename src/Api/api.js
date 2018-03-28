import axios from "axios";

class API {
  constructor() {
    this.axios = axios.create({
      baseURL: "https://cors-anywhere.herokuapp.com/https://api.deezer.com"
    });
  }

  searchTracks(value) {
    return this.axios.get("/search?q=" + value, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  /**
   * Generic Method to make a GET on Deezer API
   * Method to call on actions (Album, Artist, Track)
   *
   * @param {route} pathname
   */
  getEntity(pathname) {
    return this.axios.get(pathname, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}

const api = new API();

export default api;
