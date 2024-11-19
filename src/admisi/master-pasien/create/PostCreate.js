import http from 'k6/http';
import {check, fail} from 'k6';
import {ACCESS_TOKEN, ACCESS_TOKEN_PP, BASE_URL, HOST_ADMISI, HOST_ADMISI_PP} from "../../../../config/config.js";

export function registerPatient() {
  const url = `${HOST_ADMISI}/patient`;
  const body = {
    "title": "Dr.",
    "name": "John Doe",
    "identity": "KTP",
    "no_identity": "12345"+Math.random(),
    "birth_detail": {
      "birth_place": "Surabaya",
      "birth_date": "1990-01-01"
    },
    "gender": "Male",
    "phone": "081234567890",
    "religion": "Islam",
    "language": "Indonesian",
    "maritial_status": "Married",
    "mother_name": "Jane Doe",
    "address": {
      "prov": "Jawa Timur",
      "city": "Surabaya",
      "district": "Tegalsari",
      "rt": "001",
      "rw": "002",
      "full_address": "Jl. ABC No. 123",
      "country": "Indonesia",
      "village": "Tegalsari",
      "postal_code": "60262"
    }
  };

  const postPatientResponse = http.post(url, JSON.stringify(body), {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ACCESS_TOKEN_PP}`
    }
  });

  console.log(postPatientResponse.body);

  check(postPatientResponse, {
    'is status 201': (r) => r.status === 201,
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
    'response time is less than 10s': (r) => r.timings.duration < 10000,
    'content-type is json': (r) => r.headers['Content-Type'] === 'application/json'
  });
}
