import http from 'k6/http';
import { check, sleep } from 'k6';

const ENDPOINTS = {
  get_icd9: 'http://18.142.73.75:5000/api/v3/datamaster/icd9',
};

const headers = {
  'Content-Type': 'application/json',
  'Authorization' : 'Baerer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic3VwZXIgYWRtaW4iLCJ1c2VybmFtZSI6ImFkbWluQGdtYWlsLmNvbSIsImZhc2tlc1V1aWQiOm51bGwsIm5hbWUiOiJCYW5nIGJvZ2VyIiwiaWF0IjoxNzMwNjg3NzIzLCJleHAiOjE3MzA2OTg1MjMsImlzcyI6ImF1dGhlbnRpY2F0aW9uLXNlcml2aWNlIn0.U8dGESf_oAU87XtZEtaM_qZD0ru2dRvzL5AYRq5KdziHZ_6L3xbv7aAg0MDhKr0EEYluSAXiNb3vpF8rMAGW_7Swjf5IoUuiDG6pgpGs0qMzlWd-6_jIrn8x5LpqKj8ELpBBV8SiNV5qk1V5A1JPBSaWqd5hSgjG1VD1fGNgtJcmCV3wUEQonaPA8pAse5eej40lhw4Htfr7MfpHAImGmZ--AAqZb-nZ1COxZ8H8gcNewXcU0PCwxIViwSGwB4kCzXnra7MiIqcci6bWYtJMh3DQIov9MxbPG11_gwBEkIQviIu2O46L-GoWiT31fsm1cI6we0riBMHeIMhK97YQnA'
};

export function getICD9() {
  const regisUrl = ENDPOINTS.get_icd9;


  const regisResponse = http.get(regisUrl, { headers });
  check(regisResponse, {
    'status is 200': (r) => r.status === 200,
    'contain message': (r) => JSON.parse(r.body).message === "Data berhasil ditampilkan",
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
    'response time is less than 10s': (r) => r.timings.duration < 10000,
  });
}

