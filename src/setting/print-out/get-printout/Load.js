import { sleep } from "k6";
import {getPrintOut} from "./GetPrintOut.js";

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

    // { duration: '15s', target: 10 },
    // { duration: '30s', target: 50 },
    // { duration: '60s', target: 100 },
    // { duration: '60s', target: 250 },
    // { duration: '1m30s', target: 350 },
    // { duration: '1m30s', target: 500 },
    // { duration: '60s', target: 150 },
    // { duration: '15s', target: 0 },

    { duration: '15s', target: 50 },
    { duration: '30s', target: 100 },
    { duration: '60s', target: 200 },
    { duration: '60s', target: 400 },
    { duration: '1m30s', target: 600 },
    { duration: '1m30s', target: 800 },
    { duration: '60s', target: 300 },
    { duration: '15s', target: 0 },
  ],
};

export default function() {
  getPrintOut();
  sleep(1);
}
