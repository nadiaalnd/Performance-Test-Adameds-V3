import http from 'k6/http';
import {check, fail} from 'k6';
import {ACCESS_TOKEN, ACCESS_TOKEN_PP, BASE_URL, HOST_ADMISI, HOST_ADMISI_PP} from "../../../../config/config.js";

export function updateRajal() {
  const url = `${HOST_ADMISI_PP}/rawat-jalan/0192b84f-72a8-78fc-a4e0-8989350a49a0`;
  const body = {
    "patient_data": {
      "title": "Mr.",
      "name": "Test Update",
      "identity": "KTP",
      "no_identity": "A123456"+Math.random(),
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
    "maternity": false,
    "platform": "ADMISI",
    "complaint": "Flu and fever",
    "note": "No additional notes",
    "jadwal_dokter_uuid": "0191c056-f9f7-7b95-adf0-e2ae6967c9b2"
  };

  const updateRajalResponse = http.put(url, JSON.stringify(body), {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ACCESS_TOKEN_PP}`
    }
  });

  console.log(updateRajalResponse.body);

  check(updateRajalResponse, {
    'is status 200': (r) => r.status === 200,
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
    'response time is less than 10s': (r) => r.timings.duration < 10000,
    'content-type is json': (r) => r.headers['Content-Type'] === 'application/json',
  });
}
