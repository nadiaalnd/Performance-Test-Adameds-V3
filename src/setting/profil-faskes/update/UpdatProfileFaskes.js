import http from 'k6/http';
import {check, fail} from 'k6';
import {ACCESS_TOKEN, ACCESS_TOKEN_PP, BASE_URL, HOST_SETTING} from "../../../../config/config.js";

export function updateProfileFaskes() {
  const url = `${HOST_SETTING}/setting/profil-faskes`;
  const body = {
    "code": "FSKS01"+Math.random(),
    "name": "Faskes Utama",
    "phone": "08123456789",
    "address_uuid": "0193447a-9a77-7b9d-8cc0-5923d3028010",
    "full_address": "Jl. Jend. Sudirman No. 1",
    "prov": "DKI Jakarta",
    "city": "Jakarta Pusat",
    "district": "Gambir",
    "village": "Gambir",
    "postal_code": "10110",
    "email": "contact@faskesutama.co.id",
    "website": "https://www.faskesutama.co.id",
    "url_gmaps": "https://maps.google.com/?q=location",
    "logo": "https://example.com/logo.jpg",
    "bg_warna": "#FFFFFF",
    "code_provinsi": "3"+Math.random(),
    "code_kabupaten": "31"+Math.random(),
    "lat": "-6.200000",
    "long": "106.816666",
    "cover": "https://example.com/cover-image.jpg",
  };

  const updateProfileFaskesResponse = http.put(url, JSON.stringify(body), {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ACCESS_TOKEN}`
    }
  });

  console.log(updateProfileFaskesResponse.body);

  check(updateProfileFaskesResponse, {
    'is status 200': (r) => r.status === 200,
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
    'response time is less than 10s': (r) => r.timings.duration < 10000,
    'content-type is json': (r) => r.headers['Content-Type'] === 'application/json',
  });
}
