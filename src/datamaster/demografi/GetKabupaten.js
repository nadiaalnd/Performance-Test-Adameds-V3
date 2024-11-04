import http from 'k6/http';
import { check, sleep } from 'k6';

const ENDPOINTS = {
  get_kabupaten: 'http://18.142.73.75:5000/api/v3/datamaster/kabupaten',
};

const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic3VwZXIgYWRtaW4iLCJ1c2VybmFtZSI6ImFkbWluQGdtYWlsLmNvbSIsImZhc2tlc1V1aWQiOm51bGwsImlhdCI6MTczMDcwODY2OSwiZXhwIjoxNzMwNzE5NDY5LCJpc3MiOiJhdXRoZW50aWNhdGlvbi1zZXJpdmljZSJ9.heQw3t1pWR_PBHKGf7R6d9jLRJowo8rrXZDUi2566KCvlCDMIID8w7GwW6HWBj3-qcvdKUETmGJAiBCxyvF30QqpoYX0a_0FYlcckkeQXuqiK8u0wgucmN9XCh9LOl2adsmufO4AtZWuNR0Y3icfP--oYkqVC-yj4qMj1SYFriiGdX_f6fp-SSZg9Y_tXDf2FZ85d-8mzfBM8VbHovwTYYPI84Svr2336JXy_1zNoLnXaiWmi_i3i0x68-T5HfWR5YWvRIwu3zfoxYdukcZ8mJisi6cGoPwccFbW5iLFJUDTWIpoqjYRaJvvd4aNvUmBHUoYtGcL4Dmr8w78lTflxg'
};

export function getKabupaten() {
  const regisUrl = ENDPOINTS.get_kabupaten;


  const regisResponse = http.get(regisUrl, { headers });
  check(regisResponse, {
    'status is 200': (r) => r.status === 200,
    'contain message': (r) => JSON.parse(r.body).message === "Data berhasil ditampilkan",
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
    'response time is less than 10s': (r) => r.timings.duration < 10000,
  });
}

