"use strict";
// perlu menyambungkan html satu persatu
// ini untuk inputan
// <!-- Gaji bersih = gaji pokok + (jam lembur × 25.000) − (hari absen × 100.000)  -->
// <!-- akan ada validasi yang dengan basis sistem if else -->
// <!-- angka berisi -(maka harus >= 0) -->
// <!-- akan ada predikat berupa -->
// <!-- if else yaitu -->
// <!-- hari absen 0 == sangat disiplin -->
// <!-- hari absen 1-2 disiplin -->
// <!-- hari absen 3-4  cukup disiplin-->
const inputNama = document.getElementById('inputNama');
const inputGajiPokok = document.getElementById('inputGajiPokok');
const inputJamLembur = document.getElementById('inputJamLembur');
const inputHariAbsen = document.getElementById('inputHariAbsen');
// button
const buttonHitung = document.getElementById('buttonHitung');
// output
const hasilGaji = document.getElementById('output');
// const variable
const upahLembur = 25000;
// 25k
const potonganAbsen = 100000;
// -100k
function validasiAngka() {
    if (Number(inputGajiPokok.value) >= 0 && Number(inputJamLembur.value) >= 0) {
        if (Number(inputHariAbsen.value) >= 0) {
            const gajiBersih = hitungGaji();
            tampilan(inputNama.value, gajiBersih);
            return gajiBersih;
        }
        else {
            console.log('input tidak valid');
        }
    }
    else {
        console.log('input tidak valid');
    }
}
function hitungGaji() {
    const hitungLembur = Number(upahLembur) * Number(inputJamLembur.value);
    const hitungAbsen = Number(potonganAbsen) * Number(inputHariAbsen.value);
    const gajiBersih = Number(inputGajiPokok.value) + hitungLembur - hitungAbsen;
    return gajiBersih;
}
;
function tampilan(nama, gaji) {
    const tampil = document.createElement('div');
    // nah kita perlu apa ajasih yang tampil?
    // 1. kita perlu menampilkan nama
    // 2. kita perlu menampilkan gaji bersih
    // 3. kita perlu menampilkan status kedisiplinan
    // buat dlu elemennya satu persatu
    const namaPegawai = document.createElement('p');
    const gajiBersih = document.createElement('p');
    // const statusKedisplinan = document.createElement('p');
    const line = document.createElement('hr');
    // nah isi valuenya disini.
    namaPegawai.innerText = `Nama pegawai: ${nama}`;
    gajiBersih.innerText = `Gaji bersihnya adalah : ${gaji}`;
    // statusKedisplinan.innerText = `Status pegawainya adalah: ${status}`;
    // munculinnya disini
    hasilGaji.appendChild(namaPegawai);
    hasilGaji.appendChild(gajiBersih);
    hasilGaji.appendChild(predikat());
    hasilGaji.appendChild(line);
}
function predikat() {
    const predict = document.createElement('p');
    const hari = Number(inputHariAbsen.value);
    if (hari === 0) {
        predict.innerText = 'Sangat Disiplin';
        predict.style.color = 'lightgreen';
    }
    else if (hari > 0 && hari <= 2) {
        predict.innerText = 'Disiplin';
        predict.style.color = 'green';
    }
    else if (hari > 2 && hari < 4) {
        predict.innerText = 'cukup disiplin';
        predict.style.color = 'brown';
    }
    else if (hari > 3 && hari < 6) {
        predict.innerText = 'kurang disiplin';
        predict.style.color = 'red';
    }
    else {
        predict.innerText = 'perlu bimbingan';
        predict.style.color = 'gray';
    }
    return predict;
}
buttonHitung.addEventListener('click', validasiAngka);
