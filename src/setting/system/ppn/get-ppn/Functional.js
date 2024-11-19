import { sleep } from "k6";
import {getPpn} from "./GetPpn.js";

export const options = {
  vus: 10,
  duration: '30s',
};

export default function() {
  getPpn();
  sleep(1);
}
