import http from 'k6/http';
import {check, fail} from 'k6';
import {ACCESS_TOKEN, ACCESS_TOKEN_PP, BASE_URL, HOST_ADMISI, HOST_ADMISI_PP} from "../../../../config/config.js";

export function updatePatient() {
  const url = `${HOST_ADMISI}/patient/0192f5e1-cc97-703f-9a66-fe1034cc6ffe`;
  const body = {
    "title": "Dr.",
    "name": "Ppip",
    "identity": "KTP",
    "no_identity": "12345"+Math.random(),
    "birth_place": "Surabaya",
    "birth_date": "1990-01-01",
    "gender": "Male",
    "phone": "081234567890",
    "religion": "Islam",
    "language": "Indonesian",
    "maritial_status": "Married",
    "mother_name": "Jane Doe",
    "birth_detail": {
      "birth_place": "Cerme",
      "birth_date": "1990-01-01"
    },
    "address": {
      "city": "Gresik",
      "prov": "Jatim",
      "district": "Tegalsari",
      "rt": "001",
      "rw": "002",
      "full_address": "Jl. ABC No. 123",
      "country": "Indonesia",
      "village": "Tegalsari",
      "postal_code": "60262"
    }
  };

  const updatePatientResponse = http.put(url, JSON.stringify(body), {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ACCESS_TOKEN_PP}`
    }
  });

  console.log(updatePatientResponse.body);

  check(updatePatientResponse, {
    'is status 200': (r) => r.status === 200,
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
    'response time is less than 10s': (r) => r.timings.duration < 10000,
    'content-type is json': (r) => r.headers['Content-Type'] === 'application/json',
  });
}
