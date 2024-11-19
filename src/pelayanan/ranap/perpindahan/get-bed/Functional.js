import { sleep } from "k6";
import {getAllBed} from "./GetBed.js";

export const options = {
  vus: 10,
  duration: '30s',
};

export default function() {
  getAllBed();
  sleep(1);
}
