import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";
const API_KEY = "20c6265318msh4ee367e92cbda54p1b7e3ajsneb8b587524bb";

const options = {
  params: {
    hl: "en",
    gl: "US",
  },
  headers: {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": "youtube138.p.rapidapi.com",
  },
};

export const FetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.log(error);
  }
};
