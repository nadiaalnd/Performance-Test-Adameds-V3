import { sleep } from "k6";
import {registerNewBornRanap} from "./PostNewBorn.js";

export const options = {
  vus: 10,
  duration: '30s',
};

export default function() {
  registerNewBornRanap();
  sleep(1);
}
