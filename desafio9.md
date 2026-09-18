# 🪄 Desafio de Lógica: Gerenciamento de Itens Mágicos (JavaScript)

Projeto desenvolvido para o desafio de código da plataforma **DIO (Digital Innovation One)**, focado em Orientação a Objetos (POO), encapsulamento de atributos e métodos condicionais em JavaScript.

## 📝 Descrição do Problema
O objetivo é simular um sistema de gerenciamento de itens mágicos de um RPG. O programa deve receber o tipo do item, o valor de dano base e a resistência. A partir de uma classe/objeto, deve ser calculado o **dano em combate**: caso o tipo seja explicitamente `"arma"`, o dano é multiplicado por 2; para outros tipos (`Espada`, `Cajado`, `Arco`, etc.), o dano em combate permanece igual ao dano base.

## 💡 Conceitos Aplicados
- **Programação Orientada a Objetos (POO):** Criação da classe `ItemMagico` com construtor e métodos próprios.
- **Manipulação de Métodos (`this`):** Acesso às propriedades da própria instância no cálculo do dano.
- **Normalização de Strings (`.toLowerCase()`):** Garantia de comparação consistente para o tipo de item.
- **Entrada e Saída (STDIN / STDOUT):** Leitura de múltiplos dados sequenciais via `gets()` e impressão formatada via `print()`.

## 🛠️ Solução Implementada

```javascript
class ItemMagico {
    constructor(tipo, dano, resistencia) {
        this.tipo = tipo;
        this.dano = dano;
        this.resistencia = resistencia;
    }

    calcularDano() {
        if (this.tipo.toLowerCase() === 'arma') {
            return this.dano * 2;
        }
        return this.dano;
    }
}

const tipoItem = gets();
const danoItem = parseInt(gets());
const resistenciaItem = parseInt(gets());

const item = new ItemMagico(tipoItem, danoItem, resistenciaItem);

print(`Tipo: ${item.tipo}`);
print(`Dano: ${item.dano}`);
print(`Resistencia: ${item.resistencia}`);
print(`Dano em combate: ${item.calcularDano()}`);