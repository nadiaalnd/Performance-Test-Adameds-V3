import http from 'k6/http';
import { check, sleep } from 'k6';

const ENDPOINTS = {
  import_icd9: 'http://18.142.73.75:5000/api/v3/datamaster/icd9/import', // Sesuaikan dengan endpoint import
};

const headers = {
  'Content-Type': 'application/json',
  'Authorization': "Bearer "
};

// Payloads - Pastikan untuk mengimport data yang sesuai
const import_icd9 = {
  "message": "Data berhasil diimport"
};

export function importICD9() {
  const regisUrl = `${ENDPOINTS.import_icd9}/${import_icd9.id}`; // Tambahkan ID ke URL

  const regisPayload = JSON.stringify(import_icd9);

  const regisResponse = http.put(regisUrl, regisPayload, { headers });
  check(regisResponse, {
    'status is 200': (r) => r.status === 200,
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
    'response time is less than 10s': (r) => r.timings.duration < 10000,
  });

  sleep(1); // Jeda antar request
}
