import http from 'k6/http';
import { check, fail } from 'k6';
import { HOST_AUTH, BASE_URL } from "../../../../config/config.js";

export function postLoginAndLogout() {
  // Login
  const loginBody = {
    username: 'admin@gmail.com',
    password: 'admin123',
  };

  const loginResponse = http.post(`${HOST_AUTH}/login`, JSON.stringify(loginBody), {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });

  console.log('Login Response:', loginResponse.body);

  // Cek respons login dan ambil token
  const token = loginResponse.json('payload.token');  // Pastikan struktur json ini benar
  if (!token) {
    fail('Token tidak ditemukan!'); // Fail jika token tidak ada
  }

  console.log('Token Ditemukan:', token);

  // Logout
  const logoutResponse = http.del(`${HOST_AUTH}/logout`, null, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });

  console.log('Logout Response:', logoutResponse.body);

  check(logoutResponse, {
    'status is 202': (r) => r.status === 202 || fail("Status bukan 202!"),
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
    'response time is less than 10s': (r) => r.timings.duration < 10000,
    'admin@gmail.com berhasil logout': (r) => r.json('message') === 'admin@gmail.com berhasil logout',
  });
}
