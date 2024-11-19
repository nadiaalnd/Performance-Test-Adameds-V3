import { sleep } from 'k6';
import {registerIgd} from "./PostRegist.js";

export const options = {
  vus: 1,
  duration: '30s',
};

export default function () {
  registerIgd();
  sleep(1);
}
