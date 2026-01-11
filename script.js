function orderML() {
  const id = document.getElementById("ml_id").value;
  const server = document.getElementById("ml_server").value;
  const nominal = document.getElementById("ml_nominal").value;
  if (!id || !server) return alert("ID & Server wajib diisi!");
  alert(`Order ML diterima!\nID: ${id} (${server})\nTotal: Rp${nominal}`);
}

function orderMCGG() {
  const user = document.getElementById("mcgg_user").value;
  const nominal = document.getElementById("mcgg_nominal").value;
  if (!user) return alert("Username wajib diisi!");
  alert(`Order MCGG diterima!\nUser: ${user}\nTotal: Rp${nominal}`);
}
function orderML() {
  let id = document.getElementById("id").value;
  let server = document.getElementById("server").value;
  let nominal = document.getElementById("nominal").value;

  if (id === "" || server === "" || nominal === "") {
    alert("Lengkapi data dulu!");
    return;
  }

  let pesan =
    "Halo Admin, saya mau order Mobile Legends\n\n" +
    "ID: " + id + "\n" +
    "Server: " + server + "\n" +
    "Nominal: " + nominal;

  let nomorWA = "6281234567890"; // GANTI NOMOR INI
  let url = "https://wa.me/" + nomorWA + "?text=" + encodeURIComponent(pesan);

  window.open(url, "_blank");
}
