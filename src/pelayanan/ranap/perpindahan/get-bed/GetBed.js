import http from 'k6/http';
import {check, fail} from 'k6';
import {ACCESS_TOKEN_PP, HOST_ADMISI_PP} from "../../../../../config/config.js";

export function getAllBed() {
  const url = `${HOST_ADMISI_PP}/transfer-bed/current-bed/0192b88e-4a57-7e96-9b2f-d773bb3df926`;
  const getAllBedResponse = http.get(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ACCESS_TOKEN_PP}`
    }
  });

  console.log(getAllBedResponse.body);

  check(getAllBedResponse,{
    'is status 200': (r) => r.status === 200,
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
    'response time is less than 10s': (r) => r.timings.duration < 10000,
    'content-type is json': (r) => r.headers['Content-Type'] === 'application/json',
  });
}
