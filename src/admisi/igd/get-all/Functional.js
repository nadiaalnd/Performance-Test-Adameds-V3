import { sleep } from 'k6';
import {getAllIgd} from "./GetAll.js";

export const options = {
  vus: 10,
  duration: '30s',
};

export default function () {
  getAllIgd();
  sleep(1);
}
