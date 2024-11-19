import { sleep } from "k6";
import {updateProfileAcc} from "./UpdateProfile.js";

export const options = {
  vus: 10,
  duration: '30s',
};

export default function() {
  updateProfileAcc();
  sleep(1);
}
