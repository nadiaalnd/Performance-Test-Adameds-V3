import { sleep } from 'k6';
import {updateigd} from "./UpdateIgd.js";

export const options = {
  vus: 1,
  duration: '30s',
};

export default function () {
  updateigd();
  sleep(1);
}
