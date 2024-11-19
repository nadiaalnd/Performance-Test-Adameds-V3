import { sleep } from "k6";
import {getReportPelayanan} from "./GetPelayanan.js";

export const options = {
  vus: 10,
  duration: '30s',
};

export default function() {
  getReportPelayanan();
  sleep(1);
}
