import {check} from 'k6';
import {ACCESS_TOKEN, ACCESS_TOKEN_PP, BASE_URL, HOST_ADMISI} from "../../../../config/config.js";
import http from "k6/http";

export function getDetailPatient() {
  const url = `${HOST_ADMISI}/patient/0192f5e1-cc97-703f-9a66-fe1034cc6ffe`;

  const getDetailPatientResponse = http.get(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ACCESS_TOKEN_PP}`
    }
  });

  console.log(getDetailPatientResponse.body);

  check(getDetailPatientResponse, {
    'is status 200': (r) => r.status === 200,
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
    'response time is less than 10s': (r) => r.timings.duration < 10000,
    'content-type is json': (r) => r.headers['Content-Type'] === 'application/json',
  });
}
