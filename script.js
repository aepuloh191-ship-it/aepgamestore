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

  let nomorWA = "6285283515948";
  let link =
    "https://api.whatsapp.com/send?phone=" +
    nomorWA +
    "&text=" +
    encodeURIComponent(pesan);

  // TAMPILKAN LOADING
  document.getElementById("loading").classList.remove("hidden");

  // DELAY BENTAR BIAR HALUS
  setTimeout(() => {
    window.location.href = link;
  }, 1000);
}
