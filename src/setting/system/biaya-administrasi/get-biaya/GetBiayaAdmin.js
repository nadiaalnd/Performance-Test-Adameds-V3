import http from 'k6/http';
import {check, fail} from 'k6';
import {ACCESS_TOKEN, HOST_SETTING} from "../../../../../config/config.js";

export function getBiayaAdmin() {
  const url = `${HOST_SETTING}/setting/biaya-administrasi`;
  const getBiayaAdminResponse = http.get(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ACCESS_TOKEN}`
    }
  });

  console.log(getBiayaAdminResponse.body);

  check(getBiayaAdminResponse,{
    'is status 200': (r) => r.status === 200,
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
    'response time is less than 10s': (r) => r.timings.duration < 10000,
  });
}
