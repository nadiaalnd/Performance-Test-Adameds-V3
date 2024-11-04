import http from 'k6/http';
import { check, sleep } from 'k6';

const ENDPOINTS = {
  create_kategori_gigi: 'http://18.142.73.75:5000/api/v3/datamaster/kategori_gigi',
};

const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic3VwZXIgYWRtaW4iLCJ1c2VybmFtZSI6ImFkbWluQGdtYWlsLmNvbSIsImZhc2tlc1V1aWQiOm51bGwsImlhdCI6MTczMDc1ODE4MSwiZXhwIjoxNzMwNzY4OTgxLCJpc3MiOiJhdXRoZW50aWNhdGlvbi1zZXJpdmljZSJ9.eeOoXNWCdTivegOYdAdekIbChnnZdT6vnBly87bwCUPvWb_TvNOwnS0GxfFYoTno2IXjLEXQYkrO6gzNQ4RLsoqQJNZDtkWwARaSo64U6c8YDcSwg3N8OqDgs3VuaKdO4OMNtuYlTmnsG3guAf0MLdJYv9qD-e_NWPmjBsHWZzpmZNN3736Ky75qoGTmxYKC0dkXpwzYwSKAniJjkxAaP0rU_GrFLXtbgoiXFSzzug5OaycvBa7LGgk8dtcDpfI2xkUQvsW6ctWUsWty7ybQCaLIS8JXOS5SFs-eeYvRzbMkOsd5KogsqpvuZkTsRh1qr1KeisERIWYmvE4hUqgBqg'
};

// Fungsi untuk membuat kode unik
function generateUniqueCode() {
    return `lokasi-${Math.floor(Math.random() * 100000)}`;
  }

  // Fungsi untuk membuat code antrian poli unik
function generateUniqueCodePoli() {
  return `aa-${Math.floor(Math.random() * 100000)}`;
}

// Request Body 
export function postKategoriGigi() {
  const uniqueCode = generateUniqueCode();
  const uniqueCodePoli = generateUniqueCodePoli();
  const post_body = { 
      "code": uniqueCode,
      "name": "Poliklinik Anak 04",
      "is_poli": true,
      "code_antrian_poli" : uniqueCodePoli,
      "description": "Ini description untuk lokasi poliklinik anak",
      "phone": "1234567890",
      "email": "test@test.com",
      "url": "https://googoole.com",
      // "part_of": "Part of",
      "location_type": "1",
      "class_code": "Class-Code",
      "class_name": "class name",
      "status_opersional":"true", //Occupied
      "status": true
  };

  const regisUrl = ENDPOINTS.create_kategori_gigi;
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
