import http from 'k6/http';
import { check } from 'k6';
import {ACCESS_TOKEN, HOST_SETTING} from "../../../../../config/config.js";

export function updateBiayaAdmin() {
  const url = `${HOST_SETTING}/setting/system/biaya-admin`;
  const body = {
    "faskes_uuid": "unique-faskes-uuid",
    "status": true,
    "value": 15000.0
  };

  const updateAdminFeeResponse = http.put(url, JSON.stringify(body), {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ACCESS_TOKEN}`
    }
  });

  console.log(updateAdminFeeResponse.body);

  check(updateAdminFeeResponse, {
    'is status 200': (r) => r.status === 200,
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
    'response time is less than 10s': (r) => r.timings.duration < 10000,
    'content-type is json': (r) => r.headers['Content-Type'] === 'application/json',
  });
}
