import http from 'k6/http';
import { check, sleep } from 'k6';

const ENDPOINTS = {
  get_kelurahan: 'https://gateway.adameds.id/v3/api/datamaster/kelurahan',
};

const headers = {
  'Content-Type': 'application/json',
};

export function getKelurahan() {
  const regisUrl = ENDPOINTS.get_kelurahan;


  const regisResponse = http.get(regisUrl, { headers });
  check(regisResponse, {
    'status is 200': (r) => r.status === 200,
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
    'response time is less than 10s': (r) => r.timings.duration < 10000,
  });
}

