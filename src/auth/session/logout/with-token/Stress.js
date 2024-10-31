import { sleep } from "k6";
import { postLogout } from "./PostLogout.js";

export const options = {
  stages: [
    { duration: '1m', target: 100 },
    { duration: '1m', target: 300 },
    { duration: '1m', target: 500 },
    { duration: '1m', target: 700 },
    { duration: '1m', target: 1000 },
    { duration: '30s', target: 0 },
  ],
};

export default function() {
  postLogout();
  sleep(1);
}
