# 🧬 Desafio de Lógica: Combinando Nomes de Pokémons (JavaScript)

Projeto desenvolvido para o desafio de código da plataforma **DIO (Digital Innovation One)**, focado em manipulação de funções e concatenação de strings.

## 📝 Descrição do Problema
O objetivo é criar uma função chamada `combinarNomePokemon` que recebe o prefixo do nome de um Pokémon e o combina com o sufixo mágico (`"saur"`), formando e retornando o nome completo da criatura.

## 💡 Conceitos Aplicados
- **Funções com Parâmetros e Retorno:** Encapsulamento da lógica de transformação em uma função dedicada.
- **Concatenação de Strings:** Junção do prefixo recebido com o sufixo estático (`+` ou Template Literals).
- **Entrada e Saída (STDIN / STDOUT):** Captura do prefixo via `gets()` e impressão via `print()`.

## 🛠️ Solução Implementada

```javascript
function combinarNomePokemon(palavra) {
    return palavra + "saur";
}

const nomeEntrada = gets();
const palavraFormatada = combinarNomePokemon(nomeEntrada);

print(palavraFormatada);