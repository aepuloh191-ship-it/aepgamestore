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
function orderWA(game) {
  let id, server, nominal;

  if(game === "Mobile Legends") {
    id = document.getElementById("userid").value;
    server = document.getElementById("server").value;
    nominal = document.getElementById("nominal").value;
  } else if(game === "MCGG") {
    id = document.getElementById("userid_mcgg").value;
    server = "-";
    nominal = document.getElementById("nominal_mcgg").value;
  }

  if(id === "" || nominal === "") {
    alert("Lengkapi data dulu ya 😊");
    return;
  }

  const pesan = `Halo AepGameStore 👋
Saya mau top up

Game: ${game}
ID: ${id}
Server: ${server}
Nominal: ${nominal}

Pembayaran: DANA / QRIS
Silakan admin kirim link pembayaran`;

  const waLink = "https://wa.me/62895609770006?text=" + encodeURIComponent(pesan);
  window.open(waLink, "_blank");
}
