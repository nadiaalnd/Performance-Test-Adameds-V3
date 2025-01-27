import { sleep } from "k6";
import {updatePrintOut} from "./UpdatePrintOut.js";

export const options = {
  stages: [
    // { duration: '15s', target: 10 },
    // { duration: '30s', target: 50 },
    // { duration: '60s', target: 70 },
    // { duration: '60s', target: 80 },
    // { duration: '1m30s', target: 90 },
    // { duration: '1m30s', target: 100 },
    // { duration: '60s', target: 20 },
    // { duration: '15s', target: 0 },

    { duration: '15s', target: 10 },
    { duration: '30s', target: 25 },
    { duration: '60s', target: 35 },
    { duration: '60s', target: 50 },
    { duration: '1m30s', target: 70 },
    { duration: '1m30s', target: 90 },
    { duration: '60s', target: 20 },
    { duration: '15s', target: 0 },
  ],
};

export default function() {
  updatePrintOut();
  sleep(1);
}
