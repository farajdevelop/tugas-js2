function cekAngka() {
    let angka = document.getElementById("angka").value;
    let hasil = document.getElementById("hasil");
    
    hasil.innerHTML = "";
    
    if (angka === "") {
        hasil.innerHTML = "<span style='color: red;'>❌ Harap masukkan angka!</span>";
        return;
    }
    
    angka = parseInt(angka);
    
    if (angka % 2 === 0) {
        hasil.innerHTML = angka + " adalah bilangan GENAP";
    } else {
        hasil.innerHTML = angka + " adalah bilangan GANJIL";
    }
}

function cekRentang() {
    let dari = document.getElementById("dari").value;
    let ke = document.getElementById("ke").value;
    let hasil = document.getElementById("hasil");
    
    hasil.innerHTML = "";
    
    if (dari === "" || ke === "") {
        hasil.innerHTML = "<span style='color: red;'>❌ Harap masukan angka!</span>";
        return;
    }
    
    let dariNum = parseInt(dari);
    let keNum = parseInt(ke);
    
    if (dariNum > keNum) {
        hasil.innerHTML = "<span style='color: red;'>❌ Angka 'Dari' harus lebih kecil dari 'Ke'!</span>";
        return;
    }
    
    let output = "<h3>Hasil Cek Rentang " + dariNum + " sampai " + keNum + ":</h3>";
    
    for (let i = dariNum; i <= keNum; i++) {
        if (i % 2 === 0) {
            output += i + " = GENAP<br>";
        } else {
            output += i + " = GANJIL<br>";
        }
    }
    
    hasil.innerHTML = output;
}