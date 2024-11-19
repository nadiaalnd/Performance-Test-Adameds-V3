import { sleep } from 'k6';
import {updatePatient} from "./UpdatePasien.js";
export const options = {
  vus: 10,
  duration: '30s',
};

export default function () {
  updatePatient();
  sleep(1);
}
