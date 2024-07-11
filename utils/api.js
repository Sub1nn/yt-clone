import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";
const API_KEY = "89ab79ab45msh68623eb778e3385p1d6711jsna19042969ca3";

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
