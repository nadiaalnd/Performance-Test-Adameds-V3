import http from 'k6/http';
import {check, fail} from 'k6';
import {
  ACCESS_TOKEN,
  ACCESS_TOKEN_PP,
  BASE_URL, END_DATE,
  HOST_ADMISI,
  HOST_ADMISI_PP,
  START_DATE
} from "../../../../config/config.js";

export function getReportRawatInap() {
  const url = `${HOST_ADMISI}/report/rawat-inap?start_date=${START_DATE}&end_date=${END_DATE}`;
  const getAllRawatInapResponse = http.get(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ACCESS_TOKEN}`
    }
  });

  console.log(getAllRawatInapResponse.body);

  check(getAllRawatInapResponse,{
    'is status 200': (r) => r.status === 200,
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
    'response time is less than 10s': (r) => r.timings.duration < 10000,
    'content-type is json': (r) => r.headers['Content-Type'] === 'application/json',
  });
}
