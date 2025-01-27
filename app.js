let amigos = [];
const agregarAmigo = () => {
  const nombre = document.getElementById("amigo").value;
  if (nombre.trim() === "") {
    alert("Por favor, inserte un nombre");
    return;
  }
  amigos.push(nombre.trim());
  console.log(amigos);

  const list = document.getElementById("listaAmigos");
  list.innerHTML = "";
  amigos.forEach((amigo) => {
    list.innerHTML += `<li>${amigo}</li>`;
  });
  document.getElementById("amigo").value = "";
};

const sortearAmigo = () => {
  document.getElementById("listaAmigos").setAttribute("style", "display: none;");
  if (amigos.length === 0) {
    alert("No hay amigos para sortear");
    return;
  }
  const randomIndex = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[randomIndex];
  document.getElementById(
    "resultado"
  ).innerHTML = `El amigo sorteado es ${amigoSorteado}`;
};
