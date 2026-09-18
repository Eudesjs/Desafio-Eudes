// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

// Definição da Classe ItemMagico
class ItemMagico {
    constructor(tipo, dano, resistencia) {
        this.tipo = tipo;
        this.dano = dano;
        this.resistencia = resistencia;
    }

    // Método para calcular o dano causado em combate
    calcularDano() {
        // Quando o tipo for 'arma' (case-insensitive), multiplica o dano por 2
        if (this.tipo.toLowerCase() === 'arma') {
            return this.dano * 2;
        }
        return this.dano;
    }
}

// Leitura dos dados de entrada
const tipoItem = gets();
const danoItem = parseInt(gets());
const resistenciaItem = parseInt(gets());

// Instanciação do objeto ItemMagico
const item = new ItemMagico(tipoItem, danoItem, resistenciaItem);

// Exibição da saída conforme a formatação esperada
print(`Tipo: ${item.tipo}`);
print(`Dano: ${item.dano}`);
print(`Resistencia: ${item.resistencia}`);
print(`Dano em combate: ${item.calcularDano()}`);