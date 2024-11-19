import { sleep } from 'k6';
import {getAllRooms} from "./GetAll.js";

export const options = {
  vus: 10,
  duration: '30s',
};

export default function () {
  getAllRooms();
  sleep(1);
}
