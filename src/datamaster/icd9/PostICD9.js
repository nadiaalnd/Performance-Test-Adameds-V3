import http from 'k6/http';
import { check, sleep } from 'k6';

const ENDPOINTS = {
  create_icd9: 'http://18.142.73.75:5000/api/v3/datamaster/icd9',
};

const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic3VwZXIgYWRtaW4iLCJ1c2VybmFtZSI6ImFkbWluQGdtYWlsLmNvbSIsImZhc2tlc1V1aWQiOm51bGwsImlhdCI6MTczMDc2MTI5MywiZXhwIjoxNzMwNzcyMDkzLCJpc3MiOiJhdXRoZW50aWNhdGlvbi1zZXJpdmljZSJ9.AeBwE2U0ZQ3YXeThbZWu-bPso2o7MI6_Oh9yjmS4mlihRbjCg8FECciswXEMsde6tgnnU9EtI-wpVleUXxD5qyvgoD73XXwsyfRmn32mp_pPC0aUcA8gFfC7vv31ieqOzdtXMaG9_gG_vNnnz-s1tTaQC2a1SdYAZ43shKs8iUQX3dzFjA_rMYB4EiPPw2XDErK16Y-QxBCzskQ7Iqd3m2pnSOmEWjsM99IJfFaKvND3DCZnJtM3qIWzIrl3-OZGAKwG0pUzX2zdGpMJ4VSpfb_iy77W4qA0fvGEjjs-Nfs4dJMSWQ7AWjrMluXfjRs5KodndQ79O7gqL_Jbm1Tolw'
};

// Fungsi untuk membuat kode unik
function generateUniqueCode() {
    return `icd9-${Math.floor(Math.random() * 100000)}`;
  }

// Request Body 
export function postICD9() {
  const uniqueCode = generateUniqueCode();
  const post_body = { 
      "code": uniqueCode,
      "name": "bunga",
      "status": true
  };

  const regisUrl = ENDPOINTS.create_icd9;
  const regisRequestBody = JSON.stringify(post_body);

  const regisResponse = http.post(regisUrl, regisRequestBody, { headers });
  
//   console.log('Status:', regisResponse.status);
//   console.log('Response body:', regisResponse.body);

  check(regisResponse, {
    'status is 201': (r) => r.status === 201,
    'contain message': (r) => JSON.parse(r.body).message === "Data berhasil disimpan",
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
    'response time is less than 10s': (r) => r.timings.duration < 10000,
  });

  sleep(1); // Jeda antar request
}
