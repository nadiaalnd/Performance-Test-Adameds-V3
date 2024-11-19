import { sleep } from "k6";
import {updatePrintOut} from "./UpdatePrintOut.js";

export const options = {
  vus: 10,
  duration: '30s',
};

export default function() {
  updatePrintOut();
  sleep(1);
}
