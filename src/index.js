console.log("Desafio 01 - Lógica de Programação");

/**
 * desafio 01 - Lógica de Programação
 * 
 */

// Definição de variáveis
const listaHerois = [
    {nome: "Aragorn", xp: 750},
    {nome: "Legolas", xp: 1850},
    {nome: "Gimli", xp: 3400},
    {nome: "Frodo", xp: 6200},
    {nome: "Gandalf", xp: 7900},
    {nome: "Sauron", xp: 8500},
    {nome: "Boromir", xp: 9800},
    {nome: "Galadriel", xp: 15000},
];

// Estrutura de repetição para percorrer a lista de heróis
for (let i = 0; i < listaHerois.length; i++) {
    const heroiAtual = listaHerois[i];
    let nivelHeroi = "";

// Estrutura de decisão para determinar o nível do herói com base no XP
    if (heroiAtual.xp < 1000) {
        nivelHeroi = "Ferro";
    } else if (heroiAtual.xp >= 1001 && heroiAtual.xp < 2000) {
        nivelHeroi = "Bronze";
    } else if (heroiAtual.xp >= 2001 && heroiAtual.xp < 5000) {
        nivelHeroi = "Prata";
    } else if (heroiAtual.xp >= 5001 && heroiAtual.xp < 7000) {
        nivelHeroi = "Ouro";
    } else if (heroiAtual.xp >= 7001 && heroiAtual.xp < 8000) {
        nivelHeroi = "Platina";
    } else if (heroiAtual.xp >= 8001 && heroiAtual.xp < 9000) {
        nivelHeroi = "Ascendente";
    } else if (heroiAtual.xp >= 9001 && heroiAtual.xp < 10000) {
        nivelHeroi = "Imortal";
    } else {
        nivelHeroi = "Radiante";
    }

    // Exibição do resultado no console
    console.log(`O herói ${heroiAtual.nome} possui ${heroiAtual.xp} de XP e está no nível ${nivelHeroi}.`);
}