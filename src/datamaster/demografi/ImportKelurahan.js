import http from 'k6/http';
import { check, sleep } from 'k6';

const ENDPOINTS = {
  import_kelurahan: 'http://18.142.73.75:5000/api/v3/datamaster/kelurahan/import', // Sesuaikan dengan endpoint import
};

const headers = {
  'Content-Type': 'application/json',
  'Authorization' : 'Baerer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic3VwZXIgYWRtaW4iLCJ1c2VybmFtZSI6ImFkbWluQGdtYWlsLmNvbSIsImZhc2tlc1V1aWQiOm51bGwsImlhdCI6MTczMDcwNzc5MCwiZXhwIjoxNzMwNzE4NTkwLCJpc3MiOiJhdXRoZW50aWNhdGlvbi1zZXJpdmljZSJ9.uuy6sGfYft5-qciTXQQmQ9g7cy-d2SiWYJYF1iNjZLHOGJTgbt--DDmUWd05_krLOAZNl3QV7EIUS1jhOe9NJF8T5oB6vX35DseIiRqgAVf3aI8Fe9oo70PnOb61pqOxTosHwc146HwBV9grrmfjKd3-wbCE9_zJjw4vopow_XI3lIlOsr8DnHRey8zPB_W46lHQ25K2f2Z1G9XNl2FvQhekD4I2bB84Ac1bLLgeRM5KPFh4jOi5GBk2mA9lH_nWikInvAPf5pv1sWcrLVPTJ38EMLXAFAjFcxXZiFvUXvcZkrmUnh0jQLHPAI34l08o997xXXgwsEWbwjSifyv7Ow'
};

export function importKELURAHAN() {
  const regisUrl = `${ENDPOINTS.import_kelurahan}`;

  const regisResponse = http.post(regisUrl, { headers });
  check(regisResponse, {
    'status is 200': (r) => r.status === 200,
    'contain message': (r) => JSON.parse(r.body).message === "Data berhasil diimport",
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
    'response time is less than 10s': (r) => r.timings.duration < 10000,
  });

  sleep(1); // Jeda antar request
}
