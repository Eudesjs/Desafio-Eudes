// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

// Lê o nível do monstro (num1)
const num1 = parseInt(gets());

// Lê a dificuldade da batalha (num2)
const num2 = parseInt(gets());

// Aplica a fórmula de cálculo do XP
const xpGanhos = num1 * num2 * 100;

// Exibe a mensagem de saída formatada conforme exigido pelos testes
print(`Voce ganhou ${xpGanhos} XP!`);