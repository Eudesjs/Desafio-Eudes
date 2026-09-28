# ⚔️ Desafio: Escrevendo as Classes de um Jogo (JavaScript)

Projeto prático desenvolvido para a **Formação Lógica de Programação** na plataforma **DIO (Digital Innovation One)**, aplicando os conceitos fundamentais da Programação Orientada a Objetos (POO).

## 📝 Descrição do Problema
O objetivo é criar uma classe genérica chamada `Heroi` que represente um aventureiro com as propriedades `nome`, `idade` e `tipo` (`guerreiro`, `mago`, `monge` ou `ninja`). A classe conta com o método `atacar()`, que determina o tipo de ataque com base na classe do personagem e exibe a mensagem no padrão: `o {tipo} atacou usando {ataque}`.

## 💡 Conceitos Aplicados
- **Classes e Objetos:** Encapsulamento de propriedades e comportamentos do herói dentro da classe `Heroi`.
- **Estruturas de Decisão (`switch/case`):** Mapeamento do tipo de herói para a respectiva habilidade de ataque.
- **Normalização de Strings (`.toLowerCase()`):** Tratamento da entrada do tipo para evitar erros por letras maiúsculas/minúsculas.
- **Laços de Repetição (`for...of`):** Iteração sobre uma lista de instâncias para simular ações de múltiplos personagens.
- **Template Literals:** Interpolação de atributos para formatação limpa da saída no terminal.

## 🛠️ Solução Implementada

```javascript
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";

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
                ataque = "usou um ataque básico";
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}
