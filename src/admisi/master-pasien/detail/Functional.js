import { sleep } from 'k6';
import {getDetailPatient} from "./GetDetail.js";
export const options = {
  vus: 10,
  duration: '30s',
};

export default function () {
  getDetailPatient();
  sleep(1);
}
