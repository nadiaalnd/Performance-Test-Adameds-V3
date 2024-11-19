import { sleep } from "k6";
import {getDetailRanap} from "./GetDetail.js";

export const options = {
  vus: 10,
  duration: '30s',
};

export default function() {
  getDetailRanap();
  sleep(1);
}
