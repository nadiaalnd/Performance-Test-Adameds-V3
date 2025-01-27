import { sleep } from "k6";
import {postLoginAndLogout} from "./PostLogout.js";

export const options = {
  stages: [
    { duration: '15s', target: 10 },
    { duration: '30s', target: 15 },
    { duration: '60s', target: 25 },
    { duration: '2m', target: 30 },
    { duration: '2m30s', target: 35 },
    { duration: '3m', target: 40 },
    { duration: '60s', target: 20 },
    { duration: '15s', target: 0 },
  ],
};

export default function() {
  postLoginAndLogout();
  sleep(5);
}
