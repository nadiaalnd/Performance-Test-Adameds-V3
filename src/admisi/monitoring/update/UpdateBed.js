import { check } from 'k6';
import http from 'k6/http';
import { ACCESS_TOKEN_PP, HOST_ADMISI } from "../../../../config/config.js";

export function updateMonitoringRoom() {
  const url = `${HOST_ADMISI}/monitoring-rooms/0191690f-1cb3-7a48-8bad-b21700bd19f4`;

  const payload = JSON.stringify([
    {
      "uuid": null,
      "bed_name": "Test1",
      "no_bed": "30"
    },
    {
      "uuid": null,
      "bed_name": "Test2",
      "no_bed": "2"
    }
  ]);

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${ACCESS_TOKEN_PP}`
  };

  const response = http.patch(url, payload, { headers });

  console.log(response.body);

  check(response, {
    'is status 200': (r) => r.status === 200,
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
    'response time is less than 10s': (r) => r.timings.duration < 10000,
    'content-type is json': (r) => r.headers['Content-Type'] === 'application/json',
  });
}
