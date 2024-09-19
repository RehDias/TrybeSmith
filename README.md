# Trybesmith <img src="https://github.com/user-attachments/assets/1ba22f66-2bed-458c-b6ca-3956b7f13d70" alt="image" width="60"/>

## Sobre

O **Trybesmith** é uma API para gerenciamento de uma loja de itens medievais. Através desta API, é possível adicionar, atualizar, remover e visualizar itens da loja. Além disso, os usuários podem se cadastrar e efetuar login, com verificação de identidade realizada via **tokens JWT (JSON Web Tokens)**. Este projeto foi desenvolvido como parte do aprendizado de **TypeScript** durante o módulo de back-end na Trybe.

## Funcionalidades

- **Cadastro de Usuários**: Permite o registro de novos usuários no sistema.
- **Autenticação**: Login com verificação via token JWT para garantir a segurança das operações.
- **Gerenciamento de Itens**: 
  - Adição de novos itens à loja.
  - Atualização de informações de itens existentes.
  - Remoção de itens do catálogo.
  - Visualização de todos os itens disponíveis.

## Tecnologias Utilizadas

- **TypeScript**: Linguagem usada para garantir tipagem estática e um desenvolvimento mais seguro.
- **Express**: Framework para construção da API, facilitando a criação de rotas e o gerenciamento de requisições.
- **MySQL**: Banco de dados relacional para armazenar os usuários e itens da loja.
- **Joi**: Biblioteca de validação para garantir a integridade dos dados inseridos.
- **jsonwebtoken**: Utilizado para gerar e verificar tokens JWT, garantindo a segurança no processo de login.
- **Docker e docker-compose**: Usados para garantir a consistência e facilidade no gerenciamento do ambiente de desenvolvimento, fornecidos pela Trybe.

## Como Executar

### Pré-requisitos

- **Docker** e **docker-compose**: Certifique-se de que essas ferramentas estão instaladas.

### Passo a Passo

1. Clone o repositório:

    ```bash
    git clone https://github.com/SeuUsuario/trybesmith.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd trybesmith
    ```

3. Inicie os containers com o Docker:

    ```bash
    docker-compose up
    ```

4. Acesse a API através do endereço local fornecido.

## Estrutura do Projeto

- **src/**: Contém o código-fonte da aplicação.
  - **controllers/**: Controla a lógica de entrada e saída de dados da API.
  - **models/**: Define os modelos de dados usados pelo **MySQL**.
  - **services/**: Lida com a lógica de negócio da aplicação.
  - **routes/**: Define as rotas de requisição para itens e usuários.
  - **middlewares/**: Inclui validações e autenticação por **Joi** e **JWT**.

## Testes

Para rodar os testes automatizados, use o seguinte comando:

```bash
npm test
```

Os testes são feitos para garantir que todas as funcionalidades da API, como autenticação, gerenciamento de itens e validações, funcionem corretamente.

<h3>Aplicação</h3>

https://user-images.githubusercontent.com/91297277/200132751-d7f24bc5-0f1c-4418-afa1-b069ba58e0d3.mp4
