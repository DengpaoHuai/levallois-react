import axios from "axios";

export const meowIstance = axios.create({
  baseURL: "https://meowfacts.herokuapp.com",
});

export const getMeowFacts = async () => {
  const response = await meowIstance.get("/?count=30");
  return response.data;
};
