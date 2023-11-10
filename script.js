// Arquivo onde você deseja importar o array
import copaDoMundo2002 from "./WordCup2002.js";

// Agora você pode usar o array copaDoMundo2002 neste arquivo
console.log("🚀copaDoMundo2002:", copaDoMundo2002);

function ratingToStars(rating) {
  const maxRating = 5; // Defina o máximo de estrelas
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5 ? 1 : 0;
  const emptyStars = maxRating - fullStars - halfStar;

  const starIcon = "★"; // Use o ícone de estrela que desejar

  return (
    starIcon.repeat(fullStars) + (halfStar ? "½" : "") + "☆".repeat(emptyStars)
  );
}

// Aplicar a função ao seu objeto JSON copaDoMundo2002
copaDoMundo2002.forEach((grupo) => {
  grupo.times.forEach((time) => {
    time.rating = ratingToStars(time.rating);
  });
});

const dadosCopa = document.getElementById("dados-copa");

copaDoMundo2002.forEach((grupo) => {
  const grupoDiv = document.createElement("div");
  grupoDiv.classList.add("grupo");
  grupoDiv.innerHTML = `
        <h2>Grupo ${grupo.grupo}</h2>
      `;

  grupo.times.forEach((time) => {
    const timeDiv = document.createElement("div");
    timeDiv.classList.add("time");
    timeDiv.innerHTML = `
          <p>Time: ${time.nome}</p>
          <p>Melhor Jogador: ${time.melhorJogador}</p>
          <p>Rating: ${time.rating}</p>
          <img src="${time.bandeira}" alt="${time.nome}">
        `;

    grupoDiv.appendChild(timeDiv);
  });

  dadosCopa.appendChild(grupoDiv);
});


