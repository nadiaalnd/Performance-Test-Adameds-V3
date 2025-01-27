import { sleep } from "k6";
import { postLogin } from "./PostLogin.js";

export const options = {
  stages: [
    { duration: '15s', target: 5 },
    { duration: '30s', target: 10 },
    { duration: '60s', target: 15 },
    { duration: '60s', target: 20 },
    { duration: '1m30s', target: 25 },
    { duration: '1m30s', target: 20 },
    { duration: '60s', target: 5 },
    { duration: '15s', target: 0 },
  ],
};

export default function() {
  postLogin();
  sleep(1);

}
