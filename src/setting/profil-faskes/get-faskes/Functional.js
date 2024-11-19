import { sleep } from "k6";
import {getProfileFaskes} from "./GetProfileFaskes.js";

export const options = {
  vus: 10,
  duration: '30s',
};

export default function() {
  getProfileFaskes();
  sleep(1);
}
