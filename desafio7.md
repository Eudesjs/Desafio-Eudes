# ⛏️ Desafio de Lógica: Geração de Biomas em um Mundo de Blocos (JavaScript)

Projeto desenvolvido para o desafio de código da plataforma **DIO (Digital Innovation One)**, focado no uso de laços de repetição, manipulação de arrays e operadores aritméticos.

## 📝 Descrição do Problema
O objetivo é simular a coleta de minérios ao minerar uma rocha em um mundo de blocos. Dado o número total de golpes de picareta fornecido como entrada, o programa deve listar sequencialmente o número de cada golpe e o minério obtido (`1: Carvao`, `2: Ferro`, `3: Diamante`, `4: Pedra`).

## 💡 Conceitos Aplicados
- **Laços de Repetição (`for`):** Iteração sequencial de 1 até o número total de golpes.
- **Estruturas de Dados (Array):** Lista contendo os tipos de minérios disponíveis.
- **Operador Resto da Divisão (`%`):** Permite circular pelos índices do array caso a quantidade de golpes seja maior do que a lista de minérios.
- **Entrada e Saída (STDIN / STDOUT):** Leitura de dados via `gets()` e impressão via `print()`.

## 🛠️ Solução Implementada

```javascript
const quantidadeGolpes = parseInt(gets());
const minerios = ["Carvao", "Ferro", "Diamante", "Pedra"];

for (let i = 1; i <= quantidadeGolpes; i++) {
    let minaIndex = (i - 1) % minerios.length;
    print(`${i}: ${minerios[minaIndex]}`);
}