import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";
const API_KEY = "d6ad321a28mshadb4d23d8ca3b84p1cdd80jsnda9b4792c62c";

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
