import { sleep } from "k6";
import {getReportNewBorn} from "./GetNewBorn.js";

export const options = {
  vus: 10,
  duration: '30s',
};

export default function() {
  getReportNewBorn();
  sleep(1);
}
