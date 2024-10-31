import http from 'k6/http';
import { check, fail } from 'k6';
import { BASE_URL } from "../../../../../config/config.js";

export function postLogoutWithoutAuth() {
  const logoutResponse = http.post(`${BASE_URL}/logout`, null, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });

  // Pengecekan respons kesalahan saat tidak ada token
  check(logoutResponse, {
    'status is 401': (r) => r.status === 401 || fail("Status bukan 401!"),
    'error message is correct': (r) => r.json('error') === 'Unauthorized' || fail("Pesan error tidak sesuai!"),
  });
}
