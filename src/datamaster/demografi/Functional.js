import {sleep} from "k6";
import {getKabupaten} from "./GetKabupaten.js";


export const options = {
  vus: 10,
  duration: '30s',
};

export default function() {
  getKabupaten();
  sleep(1);
}