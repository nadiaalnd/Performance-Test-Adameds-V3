import http from 'k6/http';
import { check } from 'k6';
import {BASE_URL} from "../../../../config/config.js";


export function postLogin () {
  const body = {
    username: 'tester1',
    password: 'test-123',
  };

  const loginResponse = http.post(`${BASE_URL}/login`, JSON.stringify(body), {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });
  check(loginResponse, {
    'is status 200': (r) => r.status === 200,
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
    'response time is less than 10s': (r) => r.timings.duration < 10000,
  });
}
