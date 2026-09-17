// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

const escolha = parseInt(gets());

let pokemonEscolhido = "";

switch (escolha) {
    case 1:
        pokemonEscolhido = "Bulbasaur";
        break;
    case 2:
        pokemonEscolhido = "Charmander";
        break;
    case 4:
        pokemonEscolhido = "Pikachu";
        break;
    case 5:
        pokemonEscolhido = "Mewtwo";
        break;
}

print(`Voce escolheu o ${pokemonEscolhido} como seu Pokemon inicial.`);