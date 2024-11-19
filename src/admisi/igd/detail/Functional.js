import { sleep } from 'k6';
import {getDetailIgd} from "./GetDetail.js";

export const options = {
  vus: 10,
  duration: '30s',
};

export default function () {
  getDetailIgd();
  sleep(1);
}
