import axios from "axios";
import { Names } from "../assets/namesChamps";

const KeyCard = Names;

export const apiList = axios.create({
    baseURL: "http://ddragon.leagueoflegends.com/cdn/12.23.1/data/pt_BR/champion.json",
  });

export const apiCard = axios.create({
    baseURL: `http://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_US/champion/${KeyCard}.json`,
  });
