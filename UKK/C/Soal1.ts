// // <!-- • Ongkos kirim = (berat × 3.000) + (jarak × tarif per km) -->
// // 1. Hubungkan semua elemen HTML pada tabel di atas ke TypeScript dengan  document.getElementById(), 
// kemudian tentukan tipe elemennya (HTMLInputElement untuk kolom isian, HTMLButtonElement untuk tombol, 
// serta HTMLElement atau  HTMLParagraphElement untuk tempat hasil). 
// 2. Buatlah function bernama hitungOngkir yang tidak mengembalikan nilai (void).
//  Seluruh  perhitungan ditulis di dalam function ini. 
// 3. Ambil nilai dari kolom isian. Ubahlah isian angka menjadi bilangan dengan Number(), 
//  karena nilai dari kolom isian selalu bertipe teks. 
// 4. Periksa data terlebih dahulu. Apabila berat atau jarak bernilai 0 atau kurang, 
// hentikan  program dengan return. Tampilkan pesan: Error: Data tidak valid. 
// 5. Buatlah dua variabel untuk menyimpan zona dan tarif per km. 
// Isilah keduanya dengan  percabangan if – else if – else berdasarkan jarak (lihat tabel). 
// 6. Hitung ongkos kirim dengan rumus pada bagian "Rumus dan Aturan". 7. Tampilkan nama pengirim, zona tujuan, 
// dan ongkos kirim pada hasilOngkir menggunakan innerHTML. 
// 8. Jalankan function hitungOngkir ketika tombol btnHitung diklik dengan menggunakan  addEventListener. 

// 1. deklarasi var
// 2. function hitungOngkir (void)
// 3. transfer input
// 4. validasi data
// 5. var const zona dan tarif(value) => km
// 6. callback function rumus
// 7. tampilkan output
// 8. jalankan dengan addeventlist

// inputan
const nama = document.getElementById('nama') as HTMLInputElement;
const berat = document.getElementById('berat') as HTMLInputElement;
const jarak = document.getElementById('jarak') as HTMLInputElement;

// button
const btnHitung = document.getElementById('btnHitung') as HTMLButtonElement;

// output
const output = document.getElementById('output') as HTMLElement;
const keterangan = document.getElementById('keterangan') as HTMLElement;



// ngehitung semuanya
function hitungOngkir(): void {

    // mentransfer berat dan jarak konstata nya ke inputan value berat dan jaraknya
    const beratz = Number(berat.value);
    const jarakz = Number(jarak.value);

    // mengkategorikan apakah valid atau tidaknya inputannya
    if (beratz <= 0 || jarakz <= 0) {
        keterangan.innerText = 'Input tidak valid';
        keterangan.style.color = 'red';
    } else {
        keterangan.innerText = 'Input valid';
        keterangan.style.color = 'green';
    }

    // mendeklarasikan variable tidak tetap agar dapat diubah valuenya
    let tarif = 0;
    let zona = '';

    // buat ngekategorikan tarifnya yang nantinya akan dikalian dengan jaraknnya

    if (Number(jarak.value) >= 1 && Number(jarak.value) <= 10) {
        tarif = 1000;
        zona = 'zona 1';
    }
    else if (Number(jarak.value) > 10 && Number(jarak.value) <= 50) {
        tarif = 1500;
        zona = 'zona 2';
    }
    else if (Number(jarak.value) > 50 && Number(jarak.value) <= 200) {
        tarif = 2000;
        zona = 'zona 3';
    }
    else if (Number(jarak.value) > 200 && Number(jarak.value) <= 500) {
        tarif = 2500;
        zona = 'zona 4';
    }
    else if (Number(jarak.value) > 500) {
        tarif = 3500;
        zona = 'zona 5';
    }

    // nah disini dihitungnya, nama ditransfer valuenya dari inputnama html
    const namaz = nama.value;
    // nah disini rumusnya berat nya dikali patokan lalu ditambah jarak dikali tarifnya tadi
    const ongkosKirim = beratz * 3000 + jarakz * tarif;

    // lalu di kirim semua variable nya ke function tampil
    tampil(namaz, zona, ongkosKirim);

}

// nah ini buat nampilinnya
function tampil(namaz: string, zona: string, ongkos: number): void {
    // ini buat ngebuatnya doang
    const tampilan = document.createElement('div');

    const namaPengirim = document.createElement('p');
    const letakTujuan = document.createElement('p');
    const totalOngkos = document.createElement('p');

    // ini buat nge call parameter yang bakal di transfer dari inputan
    namaPengirim.innerText = `Nama Pengirim: ${namaz}`;
    letakTujuan.innerText = `Letak Tujuannya adalah: ${zona}`;
    totalOngkos.innerText = `Ongkos Totalnya adalah: Rp${ongkos}`;

    // buat nampilinnya
    tampilan.append(namaPengirim, letakTujuan, totalOngkos);

    // ini di validasi dlu null atau kosong atau bukannya, kalau kosong tidak dijalankan
    // namun kalau tidak kosong akan direplace output dengan div tampilan yang baru dibuat
    const output = document.getElementById('output');
    if (output !== null) {
        output.replaceChildren(tampilan);
    }
}

// lalu akan memuat kode yang tadi ketika dipencet
btnHitung.addEventListener('click', hitungOngkir);

// selesai 8:15 mulai jam 7:20 an mungkin?