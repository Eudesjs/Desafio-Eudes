# 🗝️ Desafio de Lógica: Coleta de Tesouros no Dungeon (JavaScript)

Projeto desenvolvido para o desafio de código da plataforma **DIO (Digital Innovation One)**, focado no uso de laços de repetição, estruturas condicionais e busca em arrays.

## 📝 Descrição do Problema
O objetivo é simular a exploração de salas sequenciais em uma masmorra. A partir da quantidade total de salas informada, o algoritmo deve percorrer cada sala (iniciando em 1) e verificar se há tesouro, monstro ou ambos, utilizando arrays pré-definidos de localização.

## 💡 Conceitos Aplicados
- **Laços de Repetição (`for`):** Iteração contínua de 1 até o número total de salas.
- **Métodos de Array (`.includes()`):** Verificação de presença de um elemento numérico dentro de uma lista.
- **Estruturas Condicionais (`if`):** Execução independente para verificação simultânea de tesouros e monstros na mesma sala.
- **Entrada e Saída (STDIN / STDOUT):** Captura via `gets()` e impressão via `print()`.

## 🛠️ Solução Implementada

```javascript
const totalSalas = parseInt(gets());

const salasComTesouro = [2, 4, 7, 9, 10];
const salasComMonstro = [3, 6, 8, 10];

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