import http from 'k6/http';
import { check } from 'k6';
import { ACCESS_TOKEN, HOST_SETTING } from "../../../../config/config.js";

export function updateOtherIntegration() {
  const url = `${HOST_SETTING}/setting/integrasi-other`;
  const body = {
    "api_key_post": "string123",
    "method": "POST",
    "endpoint": "https://api.example.com/endpoint",
    "header": "Authorization: Bearer example-token",
    "request": "{ \"param1\": \"value1\" }",
    "response": "{ \"response_key\": \"response_value\" }",
    "status_lainnya": true
  };

  const updateOtherIntegrationResponse = http.put(url, JSON.stringify(body), {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ACCESS_TOKEN}`
    }
  });

  console.log(updateOtherIntegrationResponse.body);

  check(updateOtherIntegrationResponse, {
    'is status 200': (r) => r.status === 200,
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
    'response time is less than 10s': (r) => r.timings.duration < 10000,
    'content-type is json': (r) => r.headers['Content-Type'] === 'application/json',
  });
}
