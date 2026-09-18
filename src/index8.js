// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

// Função que concatena a primeira parte do nome com o sufixo "saur"
function combinarNomePokemon(palavra) {
    // Sufixo fixo conforme os exemplos (Bulba -> Bulbasaur, Ivy -> Ivysaur, Venu -> Venusaur)
    const sufixo = "saur";
    return palavra + sufixo;
}

// Lê a primeira parte do nome do Pokémon
const nomeEntrada = gets();

// Executa a função e armazena o resultado
const palavraFormatada = combinarNomePokemon(nomeEntrada);

// Exibe a palavra concatenada
print(palavraFormatada);