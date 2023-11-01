import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "40f7a14ed0mshc765faaedecc0b9p1e1d0cjsn93b8c49042b8",
    "X-RapidAPI-Hos": "youtube-v3-alternative.p.rapidapi.com",
  },
};

export const AppServis = {
  async fetching(url) {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    return response;
  },
};
