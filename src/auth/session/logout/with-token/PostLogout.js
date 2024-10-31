import http from 'k6/http';
import { check, fail } from 'k6';
import { BASE_URL } from "../../../../../config/config.js";

export function postLogout() {
  const logoutResponse = http.post(`${BASE_URL}/logout`, null, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${__ENV.ACCESS_TOKEN}`,
    },
  });

  // Pengecekan untuk respons logout
  check(logoutResponse, {
    'status is 200': (r) => r.status === 200 || fail("Status bukan 200!"),
    'response time < 500ms': (r) => r.timings.duration < 500,
    'response time < 1s': (r) => r.timings.duration < 1000,
    'content-type is json': (r) => r.headers['Content-Type'] === 'application/json',
    'success message is present': (r) => r.json('message') === 'Logout successful' || fail("Pesan sukses tidak ada!"),
  });
}
