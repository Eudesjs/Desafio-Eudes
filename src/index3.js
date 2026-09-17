// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

// Lê a posição inicial do herói
const posicaoInicial = parseInt(gets());

// Lê o número total de passos
const totalPassos = parseInt(gets());

// Calcula a posição final somando a posição inicial com os passos dados
const posicaoFinal = posicaoInicial + totalPassos;

// Exibe a mensagem no formato exato exigido pela plataforma
print(`Posicao final do heroi: ${posicaoFinal}`);