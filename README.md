<h1 align="center">
    e-Coleta    
</h1>

<p align="center">
    API WEB para projeto e-Coleta, desenvolvido durante a primeira edição da Next Level Week
</p>

## 🎯&nbsp;&nbsp;&nbsp;Sobre

O projeto e-Coleta tem como objetivo a conexão entre os consumidores finais de produtos que precisam de descarte qualificado e os pontos de coleta, onde os descartes podem ser realizados com segurança.

Através de uma interface web, os responsáveis por pontos de coleta podem se cadastrar, informando os dados necessários para que sejam encontrados. Lá também poderão informar queis os itens que estão qualificados para coletar.

Os usuários por sua vez terão acesso via um aplicativo mobile, onde terão a possibilidade de encontrar o melhor ponto de coleta para o item que deseja descartar.

## 🖥&nbsp;&nbsp;&nbsp;Tecnologia

O backend (este repositório) foi desenvolvido usando typescript, o framework express para exposição de endpoints e knex para construção de consultas SQL. O banco de dados usado foi o SQLite pela facilidade de configuração e o fato de não precisar de nenhuma dependência do sistema ambiente de execução (o banco de dados é salvo em um arquivo).

A interface web ...

A interface mobile ...

### As tecnologias usadas nesse projeto (api) foram:
* Typescript
* Express.js
* Knex.js
* ESLint
* SQLite
* Docker

## 🚀&nbsp;&nbsp;&nbsp;Execução

Há duas formas de se executar o projeto (api), a primeira e mais simples é usando Docker, a segunda é pelo código fonte.

### Docker

`docker run -p 3000:3000 pcandido/ecoleta-api`

### Código fonte

1. Clone o repositório remoto na sua máquina local:<br/>
`git clone https://github.com/pcandido/ecoleta-api`
2. Entre no diretório criado:<br/>
`cd ecoleta-api`
3. Execute o projeto:<br/>
`npm start`