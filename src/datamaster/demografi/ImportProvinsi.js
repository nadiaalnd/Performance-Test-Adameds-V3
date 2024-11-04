import http from 'k6/http';
import { check, sleep } from 'k6';
import excel from 'k6/x/excel';

const ENDPOINTS = {
  post_provinsi: 'http://18.142.73.75:5000/api/v3/datamaster/provinsi',
};

const headers = {
  'Content-Type': 'application/json',
};

// Buka file Excel dan akses sheet pertama
const file = excel.open('C:\Users\LENOVO\Downloads\FILE IMPORT DATAMASTER\provinsi.xlsx');  // Sesuaikan dengan path file Excel
const sheet = file.getSheet(0);  // Ambil sheet pertama secara otomatis
const data = sheet.getRange(1, 1, sheet.getUsedRange().endRow, sheet.getUsedRange().endColumn).values;

// Tutup file setelah membaca
file.close();

export default function () {
  // Looping untuk setiap baris data di Excel (lewati header jika ada)
  for (let i = 1; i < data.length; i++) {
    const provinsi = data[i][0];  // Ambil data provinsi dari kolom pertama
    const regisUrl = `${ENDPOINTS.post_provinsi}?provinsi=${provinsi}`;

    const res = http.get(regisUrl, { headers });

    check(res, {
      'status is 200': (r) => r.status === 200,
      'response time is less than 500ms': (r) => r.timings.duration < 500,
      'response time is less than 1s': (r) => r.timings.duration < 1000,
      'response time is less than 2s': (r) => r.timings.duration < 2000,
      'response time is less than 5s': (r) => r.timings.duration < 5000,
      'response time is less than 10s': (r) => r.timings.duration < 10000,
    });

    sleep(1);  // Jeda antar request
  }
}
