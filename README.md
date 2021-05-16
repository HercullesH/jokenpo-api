# JokenpoApi


## Rodar em desenvolvimento

instalar as dependências `npm i`.
instalar o pacote global `npm i -g nodemon`

instalar o pacote global `npm i -g mocha`

para rodar os testes o comando é: `npm run test`

Utilizei testes unitários e de integração para testar funções e a api como um todo.

para rodar o servidor em desenvolvimento: `npm run dev`

o servidor irá rodar na porta 3000

Como solução do problema utilizei um dicionário para verificar o resultado. Dado um input do jogador 1 qual o input do jogador 2 para ele vencer.

Caso o input não for encontrado o jogador 2 é o vencedor.

Caso o input do jogador 1 e do jogador 2 forem iguais será empate.

Adicionado também tratamentos de erros na api.
