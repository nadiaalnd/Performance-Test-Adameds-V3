import { sleep } from 'k6';
import {registerGeneralConsent} from "./PostCreate.js";

export const options = {
  vus: 10,
  duration: '30s',
};

export default function () {
  registerGeneralConsent();
  sleep(1);
}
