import { sleep } from "k6";
import {getAllIntegrasi} from "./GetIntegrasi.js";

export const options = {
  vus: 10,
  duration: '30s',
};

export default function() {
  getAllIntegrasi();
  sleep(1);
}
