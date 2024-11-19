import { sleep } from 'k6';
import { getAllRajal } from './GetAll.js';

export const options = {
  vus: 10,
  duration: '30s',
};

export default function () {
  getAllRajal();
  sleep(1);
}
