import http from 'k6/http';
import { check } from 'k6';
import {ACCESS_TOKEN, HOST_SETTING} from "../../../../../config/config.js";

export function updatePPN() {
  const url = `${HOST_SETTING}/setting/system/ppn`;
  const body = {
    "faskes_uuid": "unique-faskes-uuid",
    "status": true,
    "value": 10.0
  };

  const updatePPNResponse = http.put(url, JSON.stringify(body), {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ACCESS_TOKEN}`
    }
  });

  console.log(updatePPNResponse.body);

  check(updatePPNResponse, {
    'is status 200': (r) => r.status === 200,
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
    'response time is less than 10s': (r) => r.timings.duration < 10000,
    'content-type is json': (r) => r.headers['Content-Type'] === 'application/json',
  });
}
