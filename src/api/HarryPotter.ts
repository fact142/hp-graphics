import axios from "axios";
import {Character} from "./interfaces";

export async function getCharacter (): Promise<{data: Character[]}> {
  return axios.get<Character[]>('https://hp-api.onrender.com/api/characters')
}