// deklarasikan var
// catatan : data tipe tidak berawalan huruf kapital
// jam kerja x upah perjam
const inputNamaPekerja = document.getElementById('inputNamaPekerja') as HTMLInputElement;
const inputJamKerja = document.getElementById('inputJamKerja') as HTMLInputElement;
const inputUpahKerja = document.getElementById('inputUpahKerja') as HTMLInputElement;

const buttonSimpan = document.getElementById('buttonSimpan') as HTMLButtonElement;

const hasil = document.getElementById('output') as HTMLParagraphElement;

// total dari semuanya
const hasilAkhir = document.getElementById('hasilAkhir') as HTMLParagraphElement;
// array harus disertai tipedata == memiliki tipedata yang sama seperti yang diminta
// array pertama merupakan tanda bahwa kode akan membuat array
// array barcade kedua telah membuat arrray tersbut dan siap diisi
const daftarPekerja: string[] = [];
const daftarJam: number[] = [];
const daftarUpahJam: number[] = [];
const daftarUpah: number[] = [];

// mengalikan upah satu pekerja
function hitungUpah(jam: number, upah: number): number {
    return jam * upah;
}


// menghitung total keseluruhan dengan cara menambahkan upah pekerja satu ke pekerja lain
function hitungTotalUpah() {
    // total disetting sebagai nol yaitu angka
    let total = 0;

    for (let i = 0; i < daftarUpah.length; i++) {
        total += daftarUpah[i];
    }

    return total;
    // dikembalikan nilainya karna telah dihitung
}

// menampilkan seluruh data

function tampilkanData(): void {

    // mengosongkan isi hasil agar lebih aman
    hasil.innerHTML = "";

    // akan terus menambah datanya kurang dari jumlah index daftar pekerja
    // yang mana akan membaca data dari index terus menerus sebelum maxnya
    for (let i = 0; i < daftarPekerja.length; i++) {

        // menampilkan isian p dengan cara menggunakan template literal secara berturut2
        hasil.innerHTML += `
            Nama Pekerja: ${daftarPekerja[i]}<br>
            Jam Kerja: ${daftarJam[i]}<br>
            Upah per Jam: ${daftarUpahJam[i]}<br>
            Total Upah: ${daftarUpah[i]}<br><br>
        `;
    }

    // mentotal dan menbilangkannya
    hasilAkhir.innerText = `Rp${hitungTotalUpah()}`;
}

function resetInput(): void {

    inputNamaPekerja.value = "";
    inputJamKerja.value = "";
    inputUpahKerja.value = "";

}

function simpanData(): void {

    // ambil value dari inputnya
    const nama: string = inputNamaPekerja.value;
    const waktuKerja: number = Number(inputJamKerja.value);
    const upah: number = Number(inputUpahKerja.value);

    // kita masukiin data nya ke array karna semua yang diatas memerlukan data array
    daftarPekerja.push(nama);
    daftarJam.push(waktuKerja);
    daftarUpahJam.push(upah);

    const index: number = daftarPekerja.length - 1;

    // Menghitung upah pekerja yang tadi, di call back dan ditampilkan ulg
    const totalUpah = hitungUpah(waktuKerja, upah);
    daftarUpah.push(totalUpah);

    // Menampilkan data
    tampilkanData();

    // jadi setelah selesai menghitung diperlukan mengosongkan array dan mempertahankan array yang sudah menjadi output
    // maka diperlukannya reset input
    // Mengosongkan input
    resetInput();

}

buttonSimpan.addEventListener("click", simpanData);