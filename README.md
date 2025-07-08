# banco-api-tests

Projeto de automação de testes para API Rest, desenvolvido em JavaScript, utilizando bibliotecas modernas para contribuir com a qualidade e confiabilidade das APIs do projeto.

## Objetivo

Automatizar testes de integração e validação das rotas da API Rest do projeto, facilitando a identificação de falhas, regressões e contribuindo para o correto funcionamento dos endpoints.

## Stack Utilizada

- **Linguagem:** JavaScript (Node.js)
- **Framework de Testes:** [Mocha](https://mochajs.org/)
- **Biblioteca de Assertivas:** [Chai](https://www.chaijs.com/)
- **Requisições HTTP:** [Supertest](https://github.com/ladjs/supertest)
- **Relatórios:** [Mochawesome](https://github.com/adamgruber/mochawesome)
- **Gerenciamento de dependências:** npm
- **Variáveis de ambiente:** [dotenv](https://github.com/motdotla/dotenv)

## Estrutura de Diretórios

```
banco-api-tests/
├── fixtures/
│   ├── postLogin.json
│   ├── postTransferencias.json
├── helpers/
│   ├── autenticao.js
├── test/
│   ├── login.test.js
│   ├── transferencia.test.js
├── .gitignore
├── package.json
├── package-lock.json
├── .env
├── mochawesome-report/
│   ├── assets
│   ├── mochawesome.html
│   ├── mochawesome.json

```

### Descrição dos Diretórios e Arquivos

- **fixtures/**: Armazena dados de entrada e mocks utilizados nos testes.
- **helpers/**: Funções utilitárias para apoio aos testes.
- **test/**: Arquivos de teste automatizado escritos com Mocha, organizados por funcionalidade da API.
- **.gitignore**: Arquivos e pastas ignorados pelo Git.
- **package.json / package-lock.json**: Gerenciamento de dependências e scripts do projeto.
- **.env**: Arquivo de variáveis de ambiente (ver formato abaixo).
- **mochawesome-report/**: Relatórios HTML, JSON gerados pelo Mochawesome após a execução dos testes.

## Configuração do Ambiente

Crie um arquivo `.env` na raiz do projeto com o seguinte formato:

```
BASE_URL=http://url-da-sua-api
```
- **BASE_URL:** URL base da API a ser testada.

## Instalação

1. Clone o repositório:
   ```
   git clone https://github.com/ieda-ia/banco-api-tests.git
   cd banco-api-tests
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Configure o arquivo `.env` conforme instruções acima.

## Execução dos Testes

Para rodar os testes automatizados e gerar o relatório:

```
npm test
```

- Os resultados dos testes serão exibidos no terminal.
- Um relatório em HTML será gerado automaticamente no diretório `mochawesome-report/`.

## Visualização do Relatório

Abra o arquivo `mochawesome-report/mochawesome.html` em seu navegador para visualizar o relatório detalhado dos testes.

## Documentação das Dependências

- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Supertest](https://github.com/ladjs/supertest)
- [Mochawesome](https://github.com/adamgruber/mochawesome)
- [dotenv](https://github.com/motdotla/dotenv)


## Licença

Este projeto não possui uma licença definida.
