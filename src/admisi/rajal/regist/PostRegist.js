import http from 'k6/http';
import {check, fail} from 'k6';
import {ACCESS_TOKEN, ACCESS_TOKEN_PP, BASE_URL, HOST_ADMISI, HOST_ADMISI_PP} from "../../../../config/config.js";

export function registerRajal() {
  const url = `${HOST_ADMISI}/rawat-jalan`;
  const body = {
    "patient_data": {
      "title": "Mr.",
      "name": "John Doe",
      "identity": "KTP",
      "no_identity": "Aa23"+Math.random(),
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
        "address_uuid": null,
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
    "payment_method": "ASURANSI",
    "maternity": false,
    "platform": "ADMISI",
    "complaint": "Flu and fever",
    "note": "No additional notes",
    "jadwal_dokter_uuid": "0191c056-f9f7-7beb-a116-ca60bf4a5422",
    "assurance_account_id": "2ed6a3cb-94aa-47f6-bca1-a99ae568e1e1"
  };

  const postRajalResponse = http.post(url, JSON.stringify(body), {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ACCESS_TOKEN}`
    }
  });

  console.log(postRajalResponse.body);

  check(postRajalResponse, {
    'is status 201': (r) => r.status === 201,
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
    'response time is less than 10s': (r) => r.timings.duration < 10000,
    'content-type is json': (r) => r.headers['Content-Type'] === 'application/json'
  });
}
