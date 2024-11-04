import http from 'k6/http';
import { check, sleep } from 'k6';

const ENDPOINTS = {
  put_loinc: 'http://18.142.73.75:5000/api/v3/datamaster/loinc/0192f688-9306-7156-87aa-b8786a22f964',
};

const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic3VwZXIgYWRtaW4iLCJ1c2VybmFtZSI6ImFkbWluQGdtYWlsLmNvbSIsImZhc2tlc1V1aWQiOm51bGwsImlhdCI6MTczMDcxMDAzMCwiZXhwIjoxNzMwNzIwODMwLCJpc3MiOiJhdXRoZW50aWNhdGlvbi1zZXJpdmljZSJ9.rU04V6eZFu_m623btT9F5FG_S8suI6TXLr9WGcThnGYV1VvFmhFHhFQhOv9ZF6GYLzOG7oTLA14RPQhKsjJ1XrP-NEh3PJ3Eg1sJJMLHOfEQQQnlIYNvuzNOklAk298Ze4VodpJMRFn5biAfHrZBfc48AokpK5bm7Q37LnGNFbKMdSQL9JHvwsy36B41M8c_9XUTp3ElojBGkSFQRCdd-AUaOKWyoBTUjW8j3VR2NCg4GY-Z1W6t6SRPppC6YH0JjgZ9FK2UYSniBI8luZIbodqweG-FVgZ1l5AKLFPV3kDYrP31yyavdfSOZUrQEhueQ03wvWoBUOLBKongupzmCw'
};

// Request Body
const put_body = {
    "code": "LOINC-01",
    "name": "zahro",
    "status": true
};

export function putLOINC() {
  const regisUrl = ENDPOINTS.put_loinc;
  const regisRequestBody = JSON.stringify(put_body);

  const regisResponse = http.put(regisUrl, regisRequestBody, { headers });
  
//   console.log('Status:', regisResponse.status);
//   console.log('Response body:', regisResponse.body);

  check(regisResponse, {
    'status is 200': (r) => r.status === 200,
    'contain message': (r) => JSON.parse(r.body).message === "Data berhasil diedit",
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
    'response time is less than 10s': (r) => r.timings.duration < 10000,
  });
}
