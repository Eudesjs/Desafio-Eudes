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
    } else if 
}
