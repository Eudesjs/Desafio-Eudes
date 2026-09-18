// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

const totalSalas = parseInt(gets());

// Arrays com as salas que contêm tesouros e monstros (conforme os testes do desafio)
const salasComTesouro = [2, 4, 7, 9, 10];
const salasComMonstro = [3, 6, 8, 10];

// Percorre todas as salas a partir da sala 1 até o número total de salas
for (let sala = 1; sala <= totalSalas; sala++) {
    const temTesouro = salasComTesouro.includes(sala);
    const temMonstro = salasComMonstro.includes(sala);

    if (temTesouro) {
        print(`Tesouro na sala ${sala}!`);
    }

    if (temMonstro) {
        print(`Monstro na sala ${sala}!`);
    }
}