import { sleep } from "k6";
import {getBiayaAdmin} from "./GetBiayaAdmin.js";

export const options = {
  vus: 10,
  duration: '30s',
};

export default function() {
  getBiayaAdmin();
  sleep(1);
}
