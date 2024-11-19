import { sleep } from "k6";
import {getReportRuangan} from "./GetRuangan.js";

export const options = {
  vus: 10,
  duration: '30s',
};

export default function() {
  getReportRuangan();
  sleep(1);
}
