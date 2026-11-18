// diperlukan beberapa array
// yaitu perlu 4 array
// daftarKendaraan(string), daftarlama (number), daftartarif(number), daftarbiaya(number)

// perlu 5 function

// hitungBiayaSewa lama, tarif (number) Mengembalikan biaya  
// sewa satu kendaraan =  lama sewa × tarif per hari.

// hitungTotalPendapatan (number)  = Menjumlahkan seluruh isi  daftarBiaya dengan  
// perulangan, kemudian  mengembalikan hasilnya.

// tampilkanData (void) = Menampilkan seluruh data  satu per satu, kemudian  total pada bagian bawah.

// resetInput (void ) = Mengosongkan semua  kolom isian

// simpanData (void) = Menyimpan data baru ke  dalam array, kemudian  menjalankan function lainnya.

// 1. deklarasikan var
// 2. buat array
// 3. buat function

const kendaraan = document.getElementById('kendaraan') as HTMLInputElement;
const lamaSewa = document.getElementById('lamaSewa') as HTMLInputElement;
const tarifHari = document.getElementById('tarifHari') as HTMLInputElement;

const btnSimpan = document.getElementById('btnSimpan') as HTMLButtonElement;

const hasil = document.getElementById('hasil') as HTMLParagraphElement;
const totalAkhir = document.getElementById('totalAkhir') as HTMLElement;

const keterangan = document.getElementById('keterangan') as HTMLParagraphElement;

// array
const daftarKendaraan: string[] = []
const daftarLama: number[] = []
const daftarTarif: number[] = []
const daftarBiaya: number[] = []

// kan hitungnya dsni
// lama sewa × tarif per hari.
function hitungBiayaSewa(lama: number, tarif: number): number {
    return lama * tarif;
}

// buat nambah semua total sub nya
function hitungTotalPendapatan() {
    let total = 0;

    for (let i = 0; i < daftarBiaya.length; i++) {
        total += daftarBiaya[i];
    }

    return total
}

// nampilin
function tampilkanData(): void {
    hasil.innerHTML = "";

    for (let i = 0; i < daftarKendaraan.length; i++) {
        if (daftarKendaraan[i] == '' && daftarBiaya[i] == 0) {
            if (daftarLama[i] == 0) {
                keterangan.innerText = 'tidak valid'
            }
        } else {


            hasil.innerHTML += `
            <br>
            Kendaraan: ${daftarKendaraan[i]}<br>
            Lama Sewa: ${daftarLama[i]}<br>
            Tarif per Hari: ${daftarTarif[i]}<br>
            Biaya Sewa: ${daftarBiaya[i]}<br>
            <br>
            <hr>
        `;

        totalAkhir.innerText = `${hitungTotalPendapatan()}`;
        }

        // if (kendaraan.value == '' && lamaSewa.value == '') {
        //     if (tarifHari.value == '') {
        //         keterangan.innerText = 'tidak valid'
        //         hasil.innerHTML = ''
        //     }
        //     else {
        //         keterangan.innerText = 'valid'
        //         
        //     }
        // }
    }
}

function resetInput(): void {

    kendaraan.value = "";
    lamaSewa.value = "";
    tarifHari.value = "";

}

function simpanData(): void {

    // ambil value dari inputnya
    const Kendaraan: string = kendaraan.value;
    const Sewa: number = Number(lamaSewa.value);
    const TarifHari: number = Number(tarifHari.value);

    // kita masukiin data nya ke array karna semua yang diatas memerlukan data array
    daftarKendaraan.push(Kendaraan);
    daftarLama.push(Sewa);
    daftarTarif.push(TarifHari);

    // Kendaraan pertama: panjang array 1, jadi indeksnya 0.
    // Kendaraan kedua: panjang array 2, jadi indeksnya 1
    const index: number = daftarKendaraan.length - 1;

    const biaya = hitungBiayaSewa(Sewa, TarifHari);
    daftarBiaya.push(biaya);

    // Menampilkan data
    tampilkanData();

    // jadi setelah selesai menghitung diperlukan mengosongkan array dan mempertahankan array yang sudah menjadi output
    // maka diperlukannya reset input
    // Mengosongkan input
    resetInput();
}

btnSimpan.addEventListener("click", simpanData);