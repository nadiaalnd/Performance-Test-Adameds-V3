import {check} from 'k6';
import {ACCESS_TOKEN, ACCESS_TOKEN_PP, BASE_URL, HOST_ADMISI} from "../../../../config/config.js";
import http from "k6/http";

export function getDetailIgd() {
  const url = `${HOST_ADMISI}/igd/0192f927-d424-745c-8bc3-d8ecaa8e5982`;

  const getDetailIgdResponse = http.get(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ACCESS_TOKEN}`
    }
  });

  console.log(getDetailIgdResponse.body);

  check(getDetailIgdResponse, {
    'is status 200': (r) => r.status === 200,
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
    'response time is less than 10s': (r) => r.timings.duration < 10000,
    'content-type is json': (r) => r.headers['Content-Type'] === 'application/json',
  });
}
