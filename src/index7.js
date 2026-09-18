// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

const quantidadeGolpes = parseInt(gets());

// Array contendo a lista de minérios mapeada por ordem de golpe
const minerios = ["Carvao", "Ferro", "Diamante", "Pedra"];

// Laço de repetição para processar cada golpe dado com a picareta
for (let i = 1; i <= quantidadeGolpes; i++) {
    // Calcula o índice do minério utilizando o operador de resto (%) para alternar os minérios
    let minaIndex = (i - 1) % minerios.length;
    
    // Exibe o número do golpe e o minério obtido
    print(`${i}: ${minerios[minaIndex]}`);
}