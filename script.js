function orderML() {
  let id = document.getElementById("id").value;
  let server = document.getElementById("server").value;
  let nominal = document.getElementById("nominal").value;

  if (!id || !server || !nominal) {
    alert("Lengkapi data dulu!");
    return;
  }

  let pesan =
    "Halo Admin, saya mau order Mobile Legends\n\n" +
    "ID: " + id + "\n" +
    "Server: " + server + "\n" +
    "Nominal: " + nominal;

  let nomorWA = "6285283515948"; // NOMOR BARU
  let link = "https://wa.me/" + nomorWA + "?text=" + encodeURIComponent(pesan);

  // INI YANG PALING AMAN DI HP
  window.location.href = link;
}
