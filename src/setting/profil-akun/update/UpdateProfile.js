import http from 'k6/http';
import {check, fail} from 'k6';
import {ACCESS_TOKEN, ACCESS_TOKEN_PP, BASE_URL, HOST_SETTING} from "../../../../config/config.js";

export function updateProfileAcc() {
  const url = `${HOST_SETTING}/setting/profile`;
  const body = {
    "uuid": "unique-user-uuid",
    "faskes_uuid": "unique-faskes-uuid",
    "role_uuid": "unique-role-uuid",
    "practitioner_uuid": "unique-practitioner-uuid",
    "phone": "08123456789",
    "email": "user@example.com",
    "username": "username123",
    "password": "securepassword123",
    "status": true,
    "photo": "https://example.com/photo.jpg",
    "permission": {
      "menu": ["dashboard", "reports"],
      "sub-menu": ["user-management", "settings"],
      "action-permission": ["create", "update", "delete"]
    }
  };

  const updateProfileAccResponse = http.put(url, JSON.stringify(body), {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ACCESS_TOKEN}`
    }
  });

  console.log(updateProfileAccResponse.body);

  check(updateProfileAccResponse, {
    'is status 200': (r) => r.status === 200,
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
    'response time is less than 10s': (r) => r.timings.duration < 10000,
    'content-type is json': (r) => r.headers['Content-Type'] === 'application/json',
  });
}
