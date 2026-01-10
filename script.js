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
