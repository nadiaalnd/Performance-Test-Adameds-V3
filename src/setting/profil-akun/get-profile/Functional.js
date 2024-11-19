import { sleep } from "k6";
import {getProfileAcc} from "./GetProfile.js";

export const options = {
  vus: 10,
  duration: '30s',
};

export default function() {
  getProfileAcc();
  sleep(1);
}
