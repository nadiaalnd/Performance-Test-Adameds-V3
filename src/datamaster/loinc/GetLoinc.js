import http from 'k6/http';
import { check, sleep } from 'k6';

const ENDPOINTS = {
  get_loinc: 'http://18.142.73.75:5000/api/v3/datamaster/loinc',
};

const headers = {
  'Content-Type': 'application/json',
  'Authorization' : 'Baerer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic3VwZXIgYWRtaW4iLCJ1c2VybmFtZSI6ImFkbWluQGdtYWlsLmNvbSIsImZhc2tlc1V1aWQiOm51bGwsImlhdCI6MTczMDcwOTc2NCwiZXhwIjoxNzMwNzIwNTY0LCJpc3MiOiJhdXRoZW50aWNhdGlvbi1zZXJpdmljZSJ9.mAhq4Vqlj6n0KN24GiHR3uxqRnL19MVoShvongYYrqflvTP9Wmz3-ljCj-U4oqrwU5K177ok_osAztze8kYW5_Yf-vAjOXRuPwsfu_-GxpbTwA7_JwoAfU1p6mYH-0HXB9iizrCHcxtjbU6aB2ns5Oa1w5oxxtAETvu7YRy5O9rSDKEPHI7E4d4vWIxidrPx6dQYd_1KsI3EXwiusF9aBUxt9NllTf9PobNGUUhCtSRu3kVkQaol5i3rO8UwKQ5Fgu9IzqExOPG1nrHMMcOGFi5lb0YMKNPSWBr-CGya_fJWT2Vi_gSAyNiSpCiYkNcC6ah-kduA5ytUntg8FVs6dA'
};

export function getLOINC() {
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

