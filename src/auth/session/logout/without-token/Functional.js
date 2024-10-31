import { sleep } from "k6";
import { postLogoutWithoutAuth } from "./PostLogout.js";

export const options = {
  vus: 1,
  duration: '30s',
};

export default function() {
  postLogoutWithoutAuth();
  sleep(1);
}
