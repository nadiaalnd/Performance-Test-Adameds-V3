import http from 'k6/http';
import { check, sleep } from 'k6';

const ENDPOINTS = {
  create_item_gigi: 'http://18.142.73.75:5000/api/v3/datamaster/item_gigi',
};

const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic3VwZXIgYWRtaW4iLCJ1c2VybmFtZSI6ImFkbWluQGdtYWlsLmNvbSIsImZhc2tlc1V1aWQiOm51bGwsImlhdCI6MTczMDc1ODE4MSwiZXhwIjoxNzMwNzY4OTgxLCJpc3MiOiJhdXRoZW50aWNhdGlvbi1zZXJpdmljZSJ9.eeOoXNWCdTivegOYdAdekIbChnnZdT6vnBly87bwCUPvWb_TvNOwnS0GxfFYoTno2IXjLEXQYkrO6gzNQ4RLsoqQJNZDtkWwARaSo64U6c8YDcSwg3N8OqDgs3VuaKdO4OMNtuYlTmnsG3guAf0MLdJYv9qD-e_NWPmjBsHWZzpmZNN3736Ky75qoGTmxYKC0dkXpwzYwSKAniJjkxAaP0rU_GrFLXtbgoiXFSzzug5OaycvBa7LGgk8dtcDpfI2xkUQvsW6ctWUsWty7ybQCaLIS8JXOS5SFs-eeYvRzbMkOsd5KogsqpvuZkTsRh1qr1KeisERIWYmvE4hUqgBqg'
};

// Fungsi untuk membuat kode unik
function generateUniqueCode() {
    return `item-${Math.floor(Math.random() * 100000)}`;
  }

  // Fungsi untuk membuat display unik
function generateUniqueDisplay() {
  return `display-${Math.floor(Math.random() * 100000)}`;
}

// Fungsi untuk membuat nama unik
function generateUniqueName() {
  return `gigi-${Math.floor(Math.random() * 100000)}`;
}

// Request Body 
export function postItemGigi() {
  const uniqueCode = generateUniqueCode();
  const uniqueDisplay = generateUniqueDisplay();
  const uniqueName = generateUniqueName();
  const post_body = { 
      "kategori_gigi_uuid": "01928bbd-6f57-789d-8898-c0462f6d71b8",
      "system": "http://snomed.info/sct", // reference
      "code": uniqueCode,
      "display": uniqueDisplay,
      "name": uniqueName,
      "image": "https://id.images.search.yahoo.com/search/images?p=gajah&fr=mcafee&type=E210ID714G0&imgurl=https%3A%2F%2Fget.pxhere.com%2Fphoto%2Fanimal-wildlife-africa-mammal-fauna-elephant-grassland-vertebrate-safari-indian-elephant-african-elephant-elephants-and-mammoths-1137755.jpg#id=-1&iurl=https%3A%2F%2Fget.pxhere.com%2Fphoto%2Fanimal-wildlife-africa-mammal-fauna-elephant-grassland-vertebrate-safari-indian-elephant-african-elephant-elephants-and-mammoths-1137755.jpg&action=click",
      "status": true,
      "catatan": "ini gigi saya"
  };

  const regisUrl = ENDPOINTS.create_item_gigi;
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
