# ⚔️ Desafio de Lógica: Pontos de Experiência (XP) em JavaScript

Projeto desenvolvido para o desafio de código da plataforma **DIO (Digital Innovation One)**, focado no uso de operadores aritméticos e entrada/saída de dados.

## 📝 Descrição do Problema
O objetivo é simular o ganho de Pontos de Experiência (XP) de um herói ao derrotar um monstro em um mundo mágico. A quantidade de XP obtida depende do nível do monstro e do grau de dificuldade da batalha.

### 📐 Fórmula do Cálculo
$$\text{XP Ganhos} = \text{Nível do Monstro (num1)} \times \text{Dificuldade (num2)} \times 100$$

## 💡 Conceitos Aplicados
- **Entrada de Dados:** Manipulação do STDIN via `gets()`.
- **Casting:** Conversão de strings para inteiros com `parseInt()`.
- **Operadores Aritméticos:** Multiplicação escalar para ajuste de pontuação.
- **Interpolação de Strings:** Formatação da saída via Template Literals.

## 🛠️ Solução Implementada

```javascript
const num1 = parseInt(gets());
const num2 = parseInt(gets());

const xpGanhos = num1 * num2 * 100;

print(`Voce ganhou ${xpGanhos} XP!`);