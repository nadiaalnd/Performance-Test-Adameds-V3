import { sleep } from "k6";
import {updateOtherIntegration} from "./UpdateOther.js";

export const options = {
  vus: 10,
  duration: '30s',
};

export default function() {
  updateOtherIntegration();
  sleep(1);
}
