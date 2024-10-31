import { sleep } from "k6";
import { postLogoutWithoutAuth } from "./PostLogout.js";

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
  postLogoutWithoutAuth();
  sleep(1);
}
