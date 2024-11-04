import http from 'k6/http';
import { check, sleep } from 'k6';

const ENDPOINTS = {
  create_icd9: 'http://18.142.73.75:5000/api/v3/datamaster/icd9',
};

const headers = {
  'Content-Type': 'application/json',
};

//Request Body 
const post_body = {
    "code": "ICD-900",
    "name": "icd okee",
    "status": true
};

export function postICD9() {
  const regisUrl = ENDPOINTS.create_icd9;

  const regisRequestBody = JSON.stringify(post_body);

  const regisResponse = http.post(regisUrl, regisRequestBody, { headers });
  check(regisResponse, {
    'status is 201': (r) => r.status === 201,
    'contain message': (r) => r.json.message === "Data berhasil disimpan",
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
    'response time is less than 10s': (r) => r.timings.duration < 10000,
  });
}
