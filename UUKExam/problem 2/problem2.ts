// Hubungkan semua elemen HTML pada tabel di atas ke TypeScript dengan
// document.getElementById(), kemudian tentukan tipe elemennya (HTMLInputElement
// untuk kolom isian, HTMLButtonElement untuk tombol, serta HTMLElement atau
// HTMLParagraphElement untuk tempat hasil).
// 2. Buatlah empat array kosong sesuai tabel "Array yang Harus Dibuat". Tulis array di luar
// function.
// 3. Buatlah function sesuai tabel "Function yang Disarankan" (minimal 1 function dengan
// return dan 1 function void).
// 4. Di dalam simpanData, lakukan langkah berikut secara berurutan:
// e) Masukkan nilai dari tiga kolom isian ke tiga array pertama dengan push() (isian
// angka diubah dengan Number()).
// e) Tentukan indeks data yang baru dimasukkan, yaitu panjang array dikurangi 1.
// e) Hitung hasilnya dengan function hitungKebutuhanBBM menggunakan data pada
// indeks tersebut, kemudian masukkan hasilnya ke array keempat dengan push().
// e) Panggil function tampilkanData.
// e) Panggil function resetInput.
// 5. Di dalam tampilkanData, kosongkan terlebih dahulu isi hasil, kemudian gunakan
// perulangan for untuk menampilkan data satu per satu dari array. Setelah perulangan
// selesai, tampilkan juga total kebutuhan BBM.
// 6. Jalankan function simpanData ketika tombol btnSimpan diklik dengan menggunakan
// addEventListener.

// Number 1 connecting HTML elements to TypeScript
const vehicle = document.getElementById('Vehicle') as HTMLInputElement;
const distance = document.getElementById('Length') as HTMLInputElement;
const bbm = document.getElementById('Consumption') as HTMLInputElement;

const saveBtn = document.getElementById('Save') as HTMLButtonElement;

const result = document.getElementById('Result') as HTMLParagraphElement;
const Display = document.getElementById('display') as HTMLParagraphElement;

// Number 2 creating empty arrays
const vahicleform : string[] = [];
const distanceform : number[] = [];
const bbmform : number[] = [];
const literform : number[] = [];

// Number 3 creating functions
function calculateBMMConsumption(distance: number, consumption: number): number {
    let total = 0;
    return (total = distance + consumption);
    Math.round(total * 100) / 100;

}

function calculateFuelConsumption() {
    let fueltotal = 0;
    for (let i = 0; i < literform.length; i++) {
        fueltotal += literform[i];
    }

    return fueltotal;
}

function dispalyResults() {
    Display.innerHTML = '';
   
    for (let i = 0; i < vahicleform.length; i++) {
        Display.innerHTML =''
 
        Display.innerHTML += `
        <br>
        Vehicle: ${vahicleform[i]} <br>
        Distance: ${distanceform[i]} <br>
        Consumption: ${bbmform[i]} <br>
        Fuel Consumption: ${literform[i]} <br>
        <br>
        <hr>
      
        `;

        result.innerHTML = `Total Fuel Consumption: ${calculateFuelConsumption()}`;
    }
}



// Number 4 creating saveData function
function saveData() {
    vahicleform.push(vehicle.value);
    distanceform.push(Number(distance.value));
    bbmform.push(Number(bbm.value));

    const index = vahicleform.length - 1;
    const fuelConsumption = calculateBMMConsumption(distanceform[index], bbmform[index]);
    literform.push(fuelConsumption);

    dispalyResults();
    resetInput();
}

// Number 5 creating resetInput function
function resetInput() {
    vehicle.value = '';
    distance.value = '';
    bbm.value = '';
}

// Number 6 adding event listener to save button
saveBtn.addEventListener('click', saveData);