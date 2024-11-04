import http from 'k6/http';
import { check, sleep } from 'k6';

const ENDPOINTS = {
  update_icd9: 'http://18.142.73.75:5000/api/v3/datamaster/icd9/0192dca4-ef7e-73c6-96ba-38005d44412d', // Sesuaikan dengan endpoint update
};

const headers = {
  'Content-Type': 'application/json',
};

// Request Body
const update_icd9 = {
  "name": "icd zahro"
};

export function updateICD9() {
  const regisUrl = `${ENDPOINTS.update_icd9}/${update_icd9.id}`; // Tambahkan ID ke URL

  const regisPayload = JSON.stringify(update_icd9);

  const regisResponse = http.put(regisUrl, regisPayload, { headers });
  check(regisResponse, {
    'status is 200': (r) => r.status === 200,
    'contain message': (r) => r.json.message === "Data gagal diedit",
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
    'response time is less than 10s': (r) => r.timings.duration < 10000,
  });

  sleep(1); // Jeda antar request
}
