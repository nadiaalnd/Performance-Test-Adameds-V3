import { sleep } from "k6";
import {getReportPenjamin} from "./GetPenjamin.js";

export const options = {
  vus: 10,
  duration: '30s',
};

export default function() {
  getReportPenjamin();
  sleep(1);
}
