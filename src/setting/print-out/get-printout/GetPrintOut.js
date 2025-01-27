import http from 'k6/http';
import {check, fail} from 'k6';
import {
  ACCESS_TOKEN,
  ACCESS_TOKEN_PP,
  BASE_URL, HOST_SETTING,
} from "../../../../config/config.js";

export function getPrintOut() {
  const url = `${HOST_SETTING}/setting/printer`;
  const getPrintOutResponse = http.get(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ACCESS_TOKEN}`
    }
  });

  console.log(getPrintOutResponse.body);

  check(getPrintOutResponse,{
    'is status 200': (r) => r.status === 200,
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
    'response time is less than 10s': (r) => r.timings.duration < 10000,
  });
}
