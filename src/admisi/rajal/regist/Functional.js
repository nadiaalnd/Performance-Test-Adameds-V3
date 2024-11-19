import { sleep } from "k6";
import {registerRajal} from "./PostRegist.js";

export const options = {
  vus: 10,
  duration: '5s',
};

export default function() {
  registerRajal();
  sleep(1);
}
