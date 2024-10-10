let deQuemEaVez = 1;
const desenhos = ["X", "O"];
const quadrados = document.querySelectorAll(".quadrado");

const tabuleiro = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

/*
for (let i = 0; i < quadrados.length; i++) {
  console.log(i, quadrados[i]);
}

console.log("============================================");

for (const quadrado of quadrados) {
  console.log(quadrado);
}

console.log("============================================");
*/

function verificarVencedor(tabuleiro) {
  // Verificar linhas
  for (let i = 0; i < 3; i++) {
    if (
      tabuleiro[i][0] !== 0 &&
      tabuleiro[i][0] === tabuleiro[i][1] &&
      tabuleiro[i][1] === tabuleiro[i][2]
    ) {
      console.log(`O jogador ${tabuleiro[i][0]} venceu!`);
      return true;
    }
  }

  // Verificar colunas
  for (let j = 0; j < 3; j++) {
    if (
      tabuleiro[0][j] !== 0 &&
      tabuleiro[0][j] === tabuleiro[1][j] &&
      tabuleiro[1][j] === tabuleiro[2][j]
    ) {
      console.log(`O jogador ${tabuleiro[0][j]} venceu!`);
      return true;
    }
  }

  // Verificar diagonais
  if (
    tabuleiro[0][0] !== 0 &&
    tabuleiro[0][0] === tabuleiro[1][1] &&
    tabuleiro[1][1] === tabuleiro[2][2]
  ) {
    console.log(`O jogador ${tabuleiro[0][0]} venceu!`);
    return true;
  }
  if (
    tabuleiro[0][2] !== 0 &&
    tabuleiro[0][2] === tabuleiro[1][1] &&
    tabuleiro[1][1] === tabuleiro[2][0]
  ) {
    console.log(`O jogador ${tabuleiro[0][2]} venceu!`);
    return true;
  }

  // Se ninguém venceu, retornar null
  return false;
}

function limparJogo() {
  deQuemEaVez = 1;
  document.querySelectorAll(".quadrado").forEach((q) => {
    q.classList.remove("jogador-1", "jogador-2");
    q.innerHTML = "";
  });
}

quadrados.forEach((quadrado) => {
  /* quadrado.addEventListener("click", function(){

  })*/
  quadrado.addEventListener("click", () => {
    if (quadrado.innerHTML === "") {
      const { coluna, linha } = quadrado.dataset;
      const simbolo = desenhos[deQuemEaVez - 1];
      tabuleiro[+linha][+coluna] = deQuemEaVez;
      quadrado.innerHTML = simbolo;
      quadrado.classList.add(`jogador-${deQuemEaVez}`);

      if (verificarVencedor(tabuleiro)) {
        console.log("O jogo acabou!");
        limparJogo();
      } else {
        if (deQuemEaVez === 1) {
          deQuemEaVez = 2;
        } else {
          deQuemEaVez = 1;
        }
      }
    } else {
      console.warn("ei abestado, ja jogaram aqui");
    }
  });
});
