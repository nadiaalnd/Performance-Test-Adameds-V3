import http from 'k6/http';
import { check, sleep } from 'k6';

const ENDPOINTS = {
  get_loinc: 'http://18.142.73.75:5000/api/v3/datamaster/loinc/export',
};

const headers = {
  'Content-Type': 'application/json',
  'Authorization' : 'Baerer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic3VwZXIgYWRtaW4iLCJ1c2VybmFtZSI6ImFkbWluQGdtYWlsLmNvbSIsImZhc2tlc1V1aWQiOm51bGwsImlhdCI6MTczMDcwMzM3OCwiZXhwIjoxNzMwNzE0MTc4LCJpc3MiOiJhdXRoZW50aWNhdGlvbi1zZXJpdmljZSJ9.UxHjqVFaMoyjkjZMZZiPozuCaat43AJFShByYc1Vj_WG7p4q9VkU7hFnfS_QbK-uGrW3XNNdQn9LEfYBxVHSyFGMJzCLm3VXKY9XN5xO4Uwoo8NHjxwRsObexstafkTo2nEs0UoFqysIlj2_VGl-ewFXoxlN9Ui-kXrzCta5WjOSpLVT9zmKqsCtVuBjis82hFf2jz2ljVSQRtv5a0cLHGIX3FIuVGyyf92nUrCvTj44fglSjt_fZOF0XheFfG6nafxGnBsiWQ7ISB48JMdFwjZ7BEGBxc-JIW91ZnFU_-OGH04IrtJS0zcgb8qIZg67s5vfYkXrByqOqOpqF01dsA'
};

export function getLOINC() {
  const regisUrl = ENDPOINTS.get_loinc;


  const regisResponse = http.get(regisUrl, { headers });
  check(regisResponse, {
    'status is 200': (r) => r.status === 200,
    'contain message': (r) => JSON.parse(r.body).message === "Data berhasil diexport",
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
    'response time is less than 10s': (r) => r.timings.duration < 10000,
  });
}

