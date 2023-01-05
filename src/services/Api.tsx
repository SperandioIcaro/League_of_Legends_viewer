import axios from "axios";

export const api = axios.create({
    baseURL: "http://ddragon.leagueoflegends.com/cdn/12.23.1/data/pt_BR/champion.json",
  });