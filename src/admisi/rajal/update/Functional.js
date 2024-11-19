import { sleep } from "k6";
import { updateRajal } from "./UpdateRajal.js";

export const options = {
  vus: 10,
  duration: '30s',
};

export default function() {
  updateRajal();
  sleep(1);
}
