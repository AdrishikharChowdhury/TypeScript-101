import axios, { type AxiosResponse } from "axios";

const BASE_URL = `https://thesimpsonsapi.com/api`;

interface Episode {
  id: number;
  airdate: string;
  description: string;
  episode_number: number;
  image_path: string;
  name: string;
  season: number;
  synopsis: string;
}

interface Simpson {
  id: number;
  age: number;
  birthdate: string;
  description: string;
  first_appearance_ep_id: number;
  first_appearance_sh_id: number;
  gender: string;
  name: string;
  occupation: string;
  phrases: string[];
  portrait_path: string;
  status: string;
  first_appearance_ep: Episode;
  first_appearance_sh: Episode;
}

const fetchData = async () => {
  try {
    const response: AxiosResponse<Simpson> = await axios.get(
      `${BASE_URL}/characters/1`,
    );
    console.log(response.data);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error", error.message);
      if (error.response) {
        console.log("Status: ", error.status);
        console.log("Data: ", error.response.data);
      } else {
        console.error("Error ", error.message);
      }
    }
  }
};

fetchData();
