function ubahGame() {
  const game = document.getElementById("game").value;
  const nominal = document.getElementById("nominal");

  // reset nominal
  nominal.innerHTML = '<option value="">Pilih Nominal</option>';

  if (game === "Mobile Legends") {
    nominal.innerHTML += `
      <option value="86 Diamond">86 Diamond</option>
      <option value="172 Diamond">172 Diamond</option>
      <option value="257 Diamond">257 Diamond</option>
    `;
  }

  if (game === "Free Fire") {
    nominal.innerHTML += `
      <option value="70 Diamond">70 Diamond</option>
      <option value="140 Diamond">140 Diamond</option>
      <option value="355 Diamond">355 Diamond</option>
    `;
  }
}

function orderGame() {
  const game = document.getElementById("game").value;
  const id = document.getElementById("id").value;
  const server = document.getElementById("server").value;
  const nominal = document.getElementById("nominal").value;

  if (!id || !nominal || (game === "Mobile Legends" && !server)) {
    alert("Lengkapi data dulu!");
    return;
  }

  let pesan =
    "ORDER BARU\n\n" +
    "Game: " + game + "\n" +
    "ID: " + id + "\n";

  if (game === "Mobile Legends") {
    pesan += "Server: " + server + "\n";
  }

  pesan += "Nominal: " + nominal;

  let nomorWA = "6285283515948";
  let link =
    "https://api.whatsapp.com/send?phone=" +
    nomorWA +
    "&text=" +
    encodeURIComponent(pesan);

  // tampilkan loading (kalau pakai)
  const loading = document.getElementById("loading");
  if (loading) loading.classList.remove("hidden");

  setTimeout(() => {
    window.location.href = link;
  }, 800);
}
