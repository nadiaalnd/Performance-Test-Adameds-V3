import http from 'k6/http';
import { check, sleep } from 'k6';

const ENDPOINTS = {
  create_organization: 'http://18.142.73.75:5000/api/v3/datamaster/loinc',
};

const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic3VwZXIgYWRtaW4iLCJ1c2VybmFtZSI6ImFkbWluQGdtYWlsLmNvbSIsImZhc2tlc1V1aWQiOm51bGwsImlhdCI6MTczMDcxNDM4MCwiZXhwIjoxNzMwNzI1MTgwLCJpc3MiOiJhdXRoZW50aWNhdGlvbi1zZXJpdmljZSJ9.i1OtMZJDXv_v4_zr4WWxX0WNEQnLwUHa-Ooz-sIl-7WTj6H_KrYSvtOlfg0i76lhG5MhhFT3BSGJja_S0KRG5gs47zo6qNaqeo3GHwLOATPhlWBrl9vU0XRbJT2C1QXwS8l9MZ3LIJVq9S2SyqNcQ5wLaQpOzZvJSYtXSwV_AgIM6HDH74AkfM9bHAXur5B0tpX9EJkbccSFxxW04UJ2fe0t89OzVWhi534t1OqSqgAYCYgwaE0Mbsl6851V1EalkSGhraaYDfcHVJOpl9lyq94dMc8dGHlIWnsThl-7EjrLE3XKUd958dyOhI4ZeiEfAdCFh4lCB6aEkN4JK-82yw'
};

// Fungsi untuk membuat kode unik
function generateUniqueCode() {
    return `loinc-${Math.floor(Math.random() * 100000)}`;
  }

// Request Body 
export function postORGANIZATION() {
  const uniqueCode = generateUniqueCode();
  const post_body = { 
      "code": uniqueCode,
      "name": "adamlabs organization childern",
      "phone": "09876543567",
      "email": "email44@organization1.com",
      "url": "https://organization1.com",
      "address_code": "3520082007",
      // "part_of_name" : "spidermen", 
      "part_of" : "019246bb-4a5d-7635-98fd-398529cc0e93",
      "status": false
  };

  const regisUrl = ENDPOINTS.create_organization;
  const regisRequestBody = JSON.stringify(post_body);

  const regisResponse = http.post(regisUrl, regisRequestBody, { headers });
  
//   console.log('Status:', regisResponse.status);
//   console.log('Response body:', regisResponse.body);

  check(regisResponse, {
    'status is 201': (r) => r.status === 201,
    'contain message': (r) => JSON.parse(r.body).message === "Data berhasil disimpan",
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
    'response time is less than 10s': (r) => r.timings.duration < 10000,
  });

  sleep(1); // Jeda antar request
}
