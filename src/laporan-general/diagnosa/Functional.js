import { sleep } from "k6";
import {getReportDiagnosa} from "./GetReportDiagnosa.js";

export const options = {
  vus: 10,
  duration: '30s',
};

export default function() {
  getReportDiagnosa();
  sleep(1);
}
