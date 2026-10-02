// ==============================
// MENU MOBILE
// ==============================

function toggleMenu() {

    const nav =
        document.getElementById("navLinks");

    nav.classList.toggle("show");

}


// ==============================
// SIMULASI TABUNGAN
// ==============================

function hitungTabungan() {

    const target =
        Number(
            document.getElementById("target").value
        );

    const setoran =
        Number(
            document.getElementById("setoran").value
        );

    const hasil =
        document.getElementById("hasil");


    // Validasi

    if (target <= 0 || setoran <= 0) {

        hasil.innerHTML =
            "Masukkan angka yang lebih dari 0.";

        return;
    }


    // Menghitung jumlah bulan

    const bulan =
        Math.ceil(target / setoran);


    // Mengubah bulan menjadi tahun

    const tahun =
        Math.floor(bulan / 12);

    const sisaBulan =
        bulan % 12;


    let waktu;


    if (tahun > 0 && sisaBulan > 0) {

        waktu =
            tahun +
            " tahun " +
            sisaBulan +
            " bulan";

    }

    else if (tahun > 0) {

        waktu =
            tahun +
            " tahun";

    }

    else {

        waktu =
            bulan +
            " bulan";

    }


    // Menampilkan hasil

    hasil.innerHTML =
        `Perkiraan waktu:
        <strong>${waktu}</strong>`;
}


// ==============================
// FORM KONTAK
// ==============================

function kirimPesan(event) {

    event.preventDefault();


    const nama =
        document.getElementById("nama").value;


    alert(
        "Terima kasih, " +
        nama +
        "! Pesan kamu berhasil disimulasikan."
    );


    event.target.reset();
}