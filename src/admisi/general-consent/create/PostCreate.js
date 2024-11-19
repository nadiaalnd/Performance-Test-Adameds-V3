import http from 'k6/http';
import { check } from 'k6';
import { ACCESS_TOKEN, HOST_ADMISI } from "../../../../config/config.js";

function generateRandomName() {
  const firstNames = ["Ishigami", "Yamato", "Hikaru", "Kazuki"];
  const lastNames = ["Byakuga", "Akiyama", "Sakamoto", "Tanaka"];
  const randomFirst = firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLast = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${randomFirst} ${randomLast}`;
}

export function registerGeneralConsent() {
  const url = `${HOST_ADMISI}/rawat-jalan`;

  const body = {
    "family_data": {
      "name": generateRandomName(),
      "gender": "Laki-Laki",
      "relationship": "Ayah"
    },
    "name": "General Consent Rawat Jalan",
    "general_consent": "base64 of document"
  };

  const postConsentResponse = http.post(url, JSON.stringify(body), {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ACCESS_TOKEN}`
    }
  });

  console.log(postConsentResponse.body);

  check(postConsentResponse, {
    'is status 201': (r) => r.status === 201,
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
    'response time is less than 10s': (r) => r.timings.duration < 10000,
    'content-type is json': (r) => r.headers['Content-Type'] === 'application/json'
  });
}
