import { sleep } from "k6";
import {getPrintOut} from "./GetPrintOut.js";

export const options = {
  vus: 10,
  duration: '30s',
};

export default function() {
  getPrintOut();
  sleep(1);
}
