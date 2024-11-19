import { sleep } from "k6";
import {getAllSurat} from "./GetLetters.js";

export const options = {
  vus: 10,
  duration: '30s',
};

export default function() {
  getAllSurat();
  sleep(1);
}
