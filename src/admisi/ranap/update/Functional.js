import { sleep } from "k6";
import {updateRanap} from "./UpdateRanap.js";

export const options = {
  vus: 10,
  duration: '30s',
};

export default function() {
  updateRanap();
  sleep(1);
}
