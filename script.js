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

function orderML() {
  alert("INI JS BARU\nNOMOR: 6285283515948");
}
  let link = "https://wa.me/" + nomorWA + "?text=" + encodeURIComponent(pesan);

  window.location.href = link;
}
