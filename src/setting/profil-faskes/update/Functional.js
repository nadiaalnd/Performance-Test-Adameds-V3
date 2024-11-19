import { sleep } from "k6";
import {updateProfileFaskes} from "./UpdatProfileFaskes.js";

export const options = {
  vus: 10,
  duration: '30s',
};

export default function() {
  updateProfileFaskes();
  sleep(1);
}
