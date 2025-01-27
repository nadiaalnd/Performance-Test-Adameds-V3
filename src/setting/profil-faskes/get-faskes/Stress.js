import { sleep } from "k6";
import {getProfileFaskes} from "./GetProfileFaskes.js";

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

    // cycle 2
    { duration: '15s', target: 50 },
    { duration: '30s', target: 100 },
    { duration: '60s', target: 300 },
    { duration: '60s', target: 500 },
    { duration: '1m30s', target: 1000 },
    { duration: '1m30s', target: 1500 },
    { duration: '2m', target: 2000 },
    { duration: '60s', target: 200 },
    { duration: '15s', target: 0 },
  ],
};

export default function() {
  getProfileFaskes();
  sleep(1);
}
