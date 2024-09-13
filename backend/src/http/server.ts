import fastify from 'fastify';

const app = fastify();

// Rodar o "app" em uma porta
app
  .listen({
    port: 3333,
  })
  .then(() => {
    // executa uma função
    console.log('HTTP server running!');
  });
