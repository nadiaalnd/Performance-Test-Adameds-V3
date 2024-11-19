import { sleep } from 'k6';
import {getAllGeneralConsent} from "./GetAll.js";

export const options = {
  vus: 10,
  duration: '30s',
};

export default function () {
  getAllGeneralConsent();
  sleep(1);
}
