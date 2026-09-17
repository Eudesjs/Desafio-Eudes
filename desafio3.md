# 🗡️ Desafio de Lógica: Jornada do Herói (JavaScript)

Projeto desenvolvido para o desafio de código da plataforma **DIO (Digital Innovation One)**, focado em praticar fundamentos básicos de lógica de programação e manipulação de entrada e saída de dados.

## 📝 Descrição do Problema
O objetivo é simular a travessia de um herói a caminho da caverna do dragão. A partir de uma **posição inicial** e de uma **quantidade total de passos**, o algoritmo deve calcular e retornar a **posição final** do herói.

## 💡 Conceitos Aplicados
- **Variáveis (`const` / `let`):** Armazenamento do estado do herói.
- **Entrada e Saída (STDIN / STDOUT):** Leitura de dados via `gets()` e exibição via `print()`.
- **Casting (Conversão de Tipos):** Uso de `parseInt()` para converter entradas de texto para inteiros.
- **Operadores Aritméticos:** Soma para progressão de posição.
- **Template Literals:** Interpolação de variáveis em strings.

## 🛠️ Solução Implementada

```javascript
const posicaoInicial = parseInt(gets());
const totalPassos = parseInt(gets());

const posicaoFinal = posicaoInicial + totalPassos;

print(`Posicao final do heroi: ${posicaoFinal}`);