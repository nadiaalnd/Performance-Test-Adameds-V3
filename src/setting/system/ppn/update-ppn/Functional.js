import { sleep } from "k6";
import {updatePPN} from "./UpdatePpn.js";

export const options = {
  vus: 10,
  duration: '30s',
};

export default function() {
  updatePPN();
  sleep(1);
}
