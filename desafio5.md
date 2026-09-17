# 🐾 Desafio de Lógica: Capturando Pokémons Iniciais (JavaScript)

Projeto desenvolvido para o desafio de código da plataforma **DIO (Digital Innovation One)**, focado no uso de estruturas de controle de fluxo e tomada de decisão.

## 📝 Descrição do Problema
O objetivo é simular a escolha inicial de um Pokémon por um treinador. O programa recebe um número inteiro referente à opção escolhida e deve exibir a mensagem de boas-vindas com o Pokémon correspondente.

## 💡 Conceitos Aplicados
- **Estruturas de Decisão (`switch/case`):** Mapeamento do número digitado para o nome do personagem.
- **Entrada e Saída (STDIN / STDOUT):** Leitura de opção via `gets()` e impressão via `print()`.
- **Casting:** Conversão do dado de entrada para o tipo numérico (`parseInt`).
- **Template Literals:** Formatação dinâmica da mensagem final.

## 🛠️ Solução Implementada

```javascript
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