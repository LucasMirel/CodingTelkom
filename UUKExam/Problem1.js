"use strict";
// // 1. Hubungkan semua elemen HTML pada tabel di atas ke TypeScript dengan
// document.getElementById(), kemudian tentukan tipe elemennya (HTMLInputElement
// untuk kolom isian, HTMLButtonElement untuk tombol, serta HTMLElement atau
// HTMLParagraphElement untuk tempat hasil).
// 2. Buatlah function bernama prosesSuhu yang tidak mengembalikan nilai (void). Seluruh
// perhitungan ditulis di dalam function ini.
// 3. Ambil nilai dari kolom isian. Ubahlah isian angka menjadi bilangan dengan Number(),
// karena nilai dari kolom isian selalu bertipe teks.
// 4. Hitung rata-rata suhu dan suhu dalam Fahrenheit dengan rumus pada bagian "Rumus dan
// Aturan".
// 5. Tentukan kategori suhu dengan percabangan if – else if – else sesuai tabel. Setiap
// cabang langsung menampilkan hasilnya pada hasilCuaca menggunakan innerHTML:
// nama kota, rata-rata suhu (°C dan °F), dan kategori.
// 6. Apabila rata-rata suhu berada di luar rentang 0 sampai 50, gunakan bagian else.
// Tampilkan pesan: Error: Suhu tidak valid.
// 7. Jalankan function prosesSuhu ketika tombol btnProses diklik dengan menggunakan
// addEventListener.
// Number 1 Connecting HTML elements to TypeScript
const cityNameInput = document.getElementById('cityName');
const morningTempInput = document.getElementById('celsiusInputMorning');
const afternoonTempInput = document.getElementById('celsiusInputEvening');
const btnProses = document.getElementById('calculate');
const display = document.getElementById('display');
const output = document.getElementById('output');
// Number 2 Function to process temperature
function temperatureProcess() {
    // Number 3 Get values from input fields and convert to numbers
    const cityName = cityNameInput.value;
    const morningTemp = Number(morningTempInput.value);
    const afternoonTemp = Number(afternoonTempInput.value);
    // Number 4 Calculate average temperature and convert to Fahrenheit
    const averageTemp = (morningTemp + afternoonTemp) / 2;
    const fahrenheitTemp = averageTemp * 9 / 5 + 32;
    display.innerHTML = "";
    output.innerHTML = "";
    // Number 5 Determine temperature category
    let category = '';
    if (averageTemp >= 0 && averageTemp < 15) {
        category = "Cold";
    }
    else if (averageTemp >= 15 && averageTemp < 25) {
        category = "warm";
    }
    else if (averageTemp >= 25 && averageTemp < 32) {
        category = "Moderate";
    }
    else if (averageTemp >= 32 && averageTemp < 38) {
        category = "Warm";
    }
    else if (averageTemp <= 50) {
        category = "Hot";
    }
    else {
        // Number 6 Handle invalid temperature range
        display.innerHTML = "Error: Temperature is not valid.";
        return;
    }
    output.innerHTML = `
        <p>City Name: ${cityName}</p>
        <p>Average Temperature: ${averageTemp.toFixed(2)} °C / ${fahrenheitTemp.toFixed(2)} °F</p>
        <p>Category: ${category}</p>
    `;
}
// Number 7 Add event listener to the button
btnProses.addEventListener('click', temperatureProcess);
