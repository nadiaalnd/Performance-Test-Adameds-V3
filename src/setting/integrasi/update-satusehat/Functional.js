import { sleep } from "k6";
import {updateSatuSehatIntegration} from "./UpdateSatuSehat.js";

export const options = {
  vus: 10,
  duration: '30s',
};

export default function() {
  updateSatuSehatIntegration();
  sleep(1);
}
