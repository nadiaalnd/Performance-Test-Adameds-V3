import http from 'k6/http';
import {check, fail} from 'k6';
import {ACCESS_TOKEN, ACCESS_TOKEN_PP, BASE_URL, HOST_ADMISI_PP} from "../../../../config/config.js";

export function updateigd() {
  const url = `${HOST_ADMISI}/igd/0192f927-d424-745c-8bc3-d8ecaa8e5982`;
  const body = {
    "patient_data": {
      "title": "Mr.",
      "name": "Ngetest",
      "identity": "KTP",
      "no_identity": "A11456"+Math.random(),
      "birth_time": "09:00",
      "birth_detail": {
        "birth_place": "Jakarta",
        "birth_date": "1990-01-01"
      },
      "gender": "Male",
      "phone": "+621234567890",
      "religion": "Islam",
      "language": "Indonesian",
      "maritial_status": "Married",
      "mother_name": "Jane Doe",
      "address": {
        "prov": "Jawa Timur",
        "city": "Jakarta Selatan",
        "district": "Pancoran",
        "rt": "01",
        "rw": "02",
        "full_address": "Jl. Raya No. 123",
        "country": "Indonesia",
        "village": "Kampung",
        "postal_code": "12345"
      }
    },
    "payment_method": "TUNAI",
    "is_newborn": true,
    "without_identity": false,
    "practitioner_uuid": "0191a18a-22e4-79f7-9da5-a10a6e1a60f9",
    "complaint": "jatuh dari motor",
    "note": "kaki bengkak",
    "maternity": false
  };

  const updateIgdResponse = http.put(url, JSON.stringify(body), {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ACCESS_TOKEN_PP}`
    }
  });

  console.log(updateIgdResponse.body);

  check(updateIgdResponse, {
    'is status 200': (r) => r.status === 200,
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
    'response time is less than 10s': (r) => r.timings.duration < 10000,
    'content-type is json': (r) => r.headers['Content-Type'] === 'application/json',
  });
}
