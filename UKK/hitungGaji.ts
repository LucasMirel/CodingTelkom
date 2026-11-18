export {};

const nama: string = (document.getElementById('nama') as HTMLInputElement).value;
const gajiPokok: number = (document.getElementById('gajiPokok') as HTMLInputElement).valueAsNumber;
const jamLembur: number = (document.getElementById('jamLembur') as HTMLInputElement).valueAsNumber;
const hariAbsen: number = (document.getElementById('hariAbsen') as HTMLInputElement).valueAsNumber;
const msg = document.getElementById('msg') as HTMLDivElement;

function setError(id, text) {
    document.getElementById(id).textContent = text;
}

function validateName() {
    const value = nama.trim();
    if (value === '') {
        setError('nameError', 'Nama karyawan tidak boleh kosong');
        return false;
    } else {
        setError('nameError', '');
        return true;
    }
}

function validateGajiPokok() {
    if (isNaN(gajiPokok) || gajiPokok <= 0) {
        setError('gajiPokokError', 'Error: Data tidak valid. Gaji pokok harus berupa angka positif.');
        return false;
    } else {
        setError('gajiPokokError', '');
        return true;
    }
}

function validateJamLembur() {
    if (isNaN(jamLembur) || jamLembur < 0) {
        setError('jamLemburError', 'Error: Data tidak valid. Jam lembur harus berupa angka positif atau nol.');
        return false;
    } else {
        setError('jamLemburError', '');
        return true;
    }
}

function validateHariAbsen() {
    if (isNaN(hariAbsen) || hariAbsen < 0) {
        setError('hariAbsenError', 'Error: Data tidak valid. Hari absen harus berupa angka positif atau nol.');
        return false;
    } else {
        setError('hariAbsenError', '');
        return true;
    }
}

nama.addEventListener('input', validateName);
gajiPokok.addEventListener('input', validateGajiPokok);
jamLembur.addEventListener('input', validateJamLembur);
hariAbsen.addEventListener('input', validateHariAbsen);
