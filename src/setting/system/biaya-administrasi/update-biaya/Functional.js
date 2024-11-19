import { sleep } from "k6";
import {updateBiayaAdmin} from "./UpdateBiayaAdmin.js";

export const options = {
  vus: 10,
  duration: '30s',
};

export default function() {
  updateBiayaAdmin();
  sleep(1);
}
