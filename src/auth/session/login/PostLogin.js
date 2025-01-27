import http from 'k6/http';
import {check, fail} from 'k6';
import {HOST_AUTH} from "../../../../config/config.js";
export function postLogin() {
  const body = {
    username: 'admin@gmail.com',
    password: 'admin123',
  };
  const loginResponse = http.post(`${HOST_AUTH}/login`, JSON.stringify(body), {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });
  console.log(loginResponse.body);
  check(loginResponse, {
    'is status 200': (r) => r.status === 200,
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
    'response time is less than 10s': (r) => r.timings.duration < 10000,
  });
}
