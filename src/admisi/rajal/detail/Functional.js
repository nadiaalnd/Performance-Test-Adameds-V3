import { sleep } from 'k6';
import { getDetailRajal } from './GetDetail.js';

export const options = {
  vus: 10,
  duration: '30s',
};

export default function () {
  getDetailRajal();
  sleep(1);
}
