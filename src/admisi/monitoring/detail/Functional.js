import { sleep } from 'k6';
import {getDetailRoom} from "./GetDetail.js";

export const options = {
  vus: 10,
  duration: '30s',
};

export default function () {
  getDetailRoom();
  sleep(1);
}
