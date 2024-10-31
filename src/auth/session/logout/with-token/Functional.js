import { sleep } from "k6";
import { postLogout } from "./PostLogout.js";

export const options = {
  vus: 1,
  duration: '30s',
};

export default function() {
  postLogout();
  sleep(1);
}
