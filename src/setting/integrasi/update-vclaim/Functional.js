import { sleep } from "k6";
import {updateVClaimIntegration} from "./UpdateVclaim.js";

export const options = {
  vus: 10,
  duration: '30s',
};

export default function() {
  updateVClaimIntegration();
  sleep(1);
}
