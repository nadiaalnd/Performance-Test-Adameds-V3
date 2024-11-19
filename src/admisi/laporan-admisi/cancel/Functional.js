import { sleep } from "k6";
import {getReportBatalKunjungan} from "./GetCancel.js";

export const options = {
  vus: 10,
  duration: '30s',
};

export default function() {
  getReportBatalKunjungan();
  sleep(1);
}
