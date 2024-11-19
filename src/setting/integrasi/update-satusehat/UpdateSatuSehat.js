import http from 'k6/http';
import { check } from 'k6';
import { ACCESS_TOKEN, HOST_SETTING } from "../../../../config/config.js";

export function updateSatuSehatIntegration() {
  const url = `${HOST_SETTING}/setting/integrasi-satu-sehat`;
  const body = {
    "client_secret": "your-client-secret",
    "organization_id": "your-organization-id",
    "client_id": "your-client-id",
    "status_satu_sehat": true
  };

  const updateSatuSehatIntegrationResponse = http.put(url, JSON.stringify(body), {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ACCESS_TOKEN}`
    }
  });

  console.log(updateSatuSehatIntegrationResponse.body);

  check(updateSatuSehatIntegrationResponse, {
    'is status 200': (r) => r.status === 200,
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
    'response time is less than 10s': (r) => r.timings.duration < 10000,
    'content-type is json': (r) => r.headers['Content-Type'] === 'application/json',
  });
}
