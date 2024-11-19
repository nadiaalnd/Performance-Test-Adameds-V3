import { sleep } from 'k6';
import {updateMonitoringRoom} from "./UpdateBed.js";

export const options = {
  vus: 10,
  duration: '30s',
};

export default function () {
  updateMonitoringRoom();
  sleep(1);
}
