# Projeto NodeJs + ReactJs

Estou desenvolvendo esse projeto  com base na NLW da rocketseat para estudar node + react.

Passo a passo para desenvolvimento do código:
- Backend:
    - Instalação padrão do NodeJS;
    - Instalação do package.json: npm init -y;
    - Criar arquivo tsconfig.json: npx tsc -init (o npx - init executa scripts de bibliotecas instalada. Nesse caso o tsc será executado);
    - npm i @types/node tsx -D: @types/node integra o typescript com o node. O tsx permite que o projeto seja executado sem precisar converter de type para javascript;
    - "npm i fastify": framework web para NodeJs
    - Utilizar o docker para rodar a imagem do projeto + banco de dados postgreSQL.
    - npm i postgres: instala o banco postgres no projeto
    - instalação do drizzle ORM para trabalhar com banco de dados. "npm i drizzle-orm"; "npm i drizzle-kit -D";
    -  npx drizzle-kit generate: gera as migrações do banco
    - "npm i zod": pacote para gerenciar a env