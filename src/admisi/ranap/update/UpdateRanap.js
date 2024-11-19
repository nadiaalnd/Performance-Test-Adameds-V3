import http from 'k6/http';
import {check, fail} from 'k6';
import {ACCESS_TOKEN, ACCESS_TOKEN_PP, BASE_URL, HOST_ADMISI_PP} from "../../../../config/config.js";

export function updateRanap() {
  const url = `${HOST_ADMISI}/rawat-inap/0192f5e1-cca8-7cca-bfb3-e464f7f06f51`;
  const body = {
    "patient_data": {
      "patient_uuid": "0191da2f-53c8-75af-84e6-1a99ef196c64",
      "title": "Mr.",
      "name": "John Doe",
      "identity": "KTP",
      "no_identity": "A1234568",
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
    "polyclinic": "Poliklinik A",
    "practitioner_uuid": "0191a18a-22e4-79f7-9da5-a10a6e1a60f9",
    "monitoring_room_uuid": "0191696e-5a95-7928-b2aa-4a1cf58aee69",
    "platform": "ADMISI",
    "complaint": "Flu and fever",
    "note": "No additional notes",
    "assurance_account_id": "2ed6a3cb-94aa-47f6-bca1-a99ae568e1e1"
  };

  const updateRanapResponse = http.put(url, JSON.stringify(body), {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ACCESS_TOKEN_PP}`
    }
  });

  console.log(updateRanapResponse.body);

  check(updateRanapResponse, {
    'is status 200': (r) => r.status === 200,
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
    'response time is less than 10s': (r) => r.timings.duration < 10000,
    'content-type is json': (r) => r.headers['Content-Type'] === 'application/json',
  });
}
