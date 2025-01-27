import { sleep } from "k6";
import {getPrintOut} from "./GetPrintOut.js";

export const options = {
  stages: [
    // { duration: '15s', target: 10 },
    // { duration: '30s', target: 50 },
    // { duration: '60s', target: 100 },
    // { duration: '60s', target: 300 },
    // { duration: '1m30s', target: 400 },
    // { duration: '1m30s', target: 600 },
    // { duration: '2m', target: 1000 },
    // { duration: '60s', target: 200 },
    // { duration: '15s', target: 0 },

    // { duration: '15s', target: 50 },
    // { duration: '30s', target: 100 },
    // { duration: '60s', target: 300 },
    // { duration: '60s', target: 500 },
    // { duration: '1m30s', target: 1000 },
    // { duration: '1m30s', target: 1500 },
    // { duration: '2m', target: 2000 },
    // { duration: '60s', target: 200 },
    // { duration: '15s', target: 0 },

    // { duration: '15s', target: 100 },
    // { duration: '30s', target: 300 },
    // { duration: '60s', target: 500 },
    // { duration: '60s', target: 1000 },
    // { duration: '1m30s', target: 2000 },
    // { duration: '1m30s', target: 3000 },
    // { duration: '2m', target: 4000 },
    // { duration: '60s', target: 200 },
    // { duration: '15s', target: 0 },

    { duration: '15s', target: 100 },
    { duration: '30s', target: 500 },
    { duration: '60s', target: 1000 },
    { duration: '60s', target: 2000 },
    { duration: '2m30s', target: 3000 },
    { duration: '2m30s', target: 4000 },
    { duration: '3m', target: 5000 },
    { duration: '60s', target: 200 },
    { duration: '15s', target: 0 },

    // { duration: '15s', target: 100 },
    // { duration: '30s', target: 500 },
    // { duration: '60s', target: 1000 },
    // { duration: '60s', target: 2000 },
    // { duration: '2m30s', target: 3000 },
    // { duration: '2m30s', target: 5000 },
    // { duration: '3m', target: 6000 },
    // { duration: '60s', target: 200 },
    // { duration: '15s', target: 0 },
  ],
};

export default function() {
  getPrintOut();
  sleep(1);
}
