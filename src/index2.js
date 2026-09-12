console.log("Desafio 02 - Lógica de Programação");
console.log("CALCULADORA DE PARTIDAS RANKEADAS");


function clacularNivel(virorias, derrotas) {
    let saldovitorias = vitorias - derrotas;
    let nivel = "";

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamente";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    return { saldovitorias, nivel };
}

const jogadores = [
    {vitorias: 8, derrotas: 3},
    {vitorias: 15, derrotas: 5},
    {vitorias: 45, derrotas: 10},
    {vitorias: 75, derrotas: 20},
    {vitorias: 88, derrotas: 15},
    {vitorias: 95, derrotas: 10},
    {vitorias: 120, derrotas: 30}
];

for (const jogador of jogadores) {
    let resultado = clacularNivel(jogador.vitorias, jogador.derrotas);
    console.log(`Jogador com ${jogador.vitorias} vitórias e ${jogador.derrotas} derrotas:`);
    console.log(`Saldo de vitórias: ${resultado.saldovitorias}`);
    console.log(`Nível: ${resultado.nivel}`);
    console.log("-----------------------------");
}
