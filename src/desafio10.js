// Definição da classe generica Herói
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método responsável por executar o ataque de acordo com o tipo
    atacar() {
        let ataque = "";

        // Estrutura de decisão para determinar o tipo de ataque
        switch (this.tipo.toLowerCase()) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou um ataque desconhecido";
        }

        // Exibição da mensagem formatada exigida
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// Instanciação dos objetos (Heróis) e teste da execução
const herois = [
    new Heroi("Geralt", 100, "guerreiro"),
    new Heroi("Gandalf", 2000, "mago"),
    new Heroi("Shaolin", 30, "monge"),
    new Heroi("Hattori", 25, "ninja")
];

// Laço de repetição para fazer todos os heróis atacarem
for (const heroi of herois) {
    heroi.atacar();
}
