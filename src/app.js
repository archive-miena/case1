function konversiSuhu() {
    let suhu = Number(document.getElementById("suhu").value);
    let jenis = document.getElementById("jenisSuhu").value;
    let hasil;

    if (jenis === "fahrenheit") {
        hasil = (suhu * 9 / 5) + 32;
        document.getElementById("hasil").textContent =
            suhu + "°C = " + hasil + "°F";
    } else {
        hasil = suhu + 273.15;
        document.getElementById("hasil").textContent =
            suhu + "°C = " + hasil + " K";
    }
}