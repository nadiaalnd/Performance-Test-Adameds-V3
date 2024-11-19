import { sleep } from "k6";
import {registerPatient} from "./PostCreate.js";

export const options = {
  vus: 10,
  duration: '5s',
};

export default function() {
  registerPatient();
  sleep(1);
}
