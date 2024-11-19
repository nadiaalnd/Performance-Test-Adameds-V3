import { sleep } from 'k6';
import {getDetailGeneralConsent} from "./GetDetail.js";

export const options = {
  vus: 10,
  duration: '30s',
};

export default function () {
  getDetailGeneralConsent();
  sleep(1);
}
