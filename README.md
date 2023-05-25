# Car Shop Api
Neste projeto, foi desenvolvido uma API CRUD aplicando os princípios de Programação Orientada a Objetos (POO) para gerenciar uma concessionária de veículos. Foi desenvolvido com TypeScript e utilizando o banco de dados MongoDB através do framework do Mongoose.

## Tecnologias utilizadas.
Typescript, Node, Express, Moongose, MongoDB, Docker

## Rodando com docker

Rode os serviços node e mongodb com o comando `docker-compose up -d`.

Lembre-se de parar o mongodb se estiver usando localmente na porta padrão (27017), ou adapte, caso queria fazer uso da aplicação em containers.

Esses serviços irão inicializar um container chamado `car_shop` e outro chamado `car_shop_db`.

A partir daqui você pode rodar o container `car_shop` via CLI ou abri-lo no VS Code.

Use o comando `docker exec -it car_shop bash`.

Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

Instale as dependências "Caso existam" com `npm install`

 - **⚠ Atenção:** Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 
  - **⚠ Atenção:** O **git** dentro do container não vem configurado com suas credenciais. Ou faça os commits fora do container, ou configure as suas credenciais do git dentro do container.
  - **⚠ Atenção:** Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

## Rotas da API

Adicionar um carro
Post `/cars`
| Parâmetro | Descrição |
| :-------: | :-------- |
| `model`   | tipo string obrigatório no body |
| `year`    | tipo number obrigatório no body |
| `color`   | tipo string obrigatório no body |
| `status`  |tipo bool nao obrigatório no body|
| `buyValue` | tipo number obrigatório no body |
| `doorsQty` | tipo number obrigatório no body |
| `seatsQty` | tipo number obrigatório no body |
<!-- Olá, Tryber!
Esse é apenas um arquivo inicial para o README do seu projeto no qual você pode customizar e reutilizar todas as vezes que for executar o trybe-publisher.

Para deixá-lo com a sua cara, basta alterar o seguinte arquivo da sua máquina: ~/.student-repo-publisher/custom/_NEW_README.md

É essencial que você preencha esse documento por conta própria, ok?
Não deixe de usar nossas dicas de escrita de README de projetos, e deixe sua criatividade brilhar!
:warning: IMPORTANTE: você precisa deixar nítido:
- quais arquivos/pastas foram desenvolvidos por você; 
- quais arquivos/pastas foram desenvolvidos por outra pessoa estudante;
- quais arquivos/pastas foram desenvolvidos pela Trybe.
-->
