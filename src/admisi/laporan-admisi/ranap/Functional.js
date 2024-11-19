import { sleep } from "k6";
import {getReportRawatInap} from "./GetRanap.js";

export const options = {
  vus: 10,
  duration: '30s',
};

export default function() {
  getReportRawatInap();
  sleep(1);
}
