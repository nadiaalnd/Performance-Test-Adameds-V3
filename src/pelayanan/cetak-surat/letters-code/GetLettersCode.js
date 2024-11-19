import http from 'k6/http';
import {check, fail} from 'k6';
import {ACCESS_TOKEN, HOST_PELAYANAN} from "../../../../config/config.js";

export function getAllSurat() {
  const url = `${HOST_PELAYANAN}/pelayanan/files/letters?rekam_medis_uuid=66d2f679bb2c30203af22216`;
  const getAllSuratResponse = http.get(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ACCESS_TOKEN}`
    }
  });

  console.log(getAllSuratResponse.body);

  check(getAllSuratResponse,{
    'is status 200': (r) => r.status === 200,
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
    'response time is less than 10s': (r) => r.timings.duration < 10000,
    'content-type is json': (r) => r.headers['Content-Type'] === 'application/json',
  });
}
