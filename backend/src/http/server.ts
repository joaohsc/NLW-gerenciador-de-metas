import fastify from 'fastify';
import { serializerCompiler, validatorCompiler, ZodTypeProvider } from 'fastify-type-provider-zod';
import { createGoal } from '../functions/create-goal';
import z from 'zod'

const app = fastify();

app.post('/goals', async (request)=>{
  const createGoalSchema = z.object({
    title: z.string(),
    desiredWeeklyFrequency: z.number().int().min(1).max(7),
  })

  const body = createGoalSchema.parse(request.body)

  await createGoal({
    title: body.title,
    desiredWeeklyFrequency : body.desiredWeeklyFrequency,
  })
})

// Rodar o "app" em uma porta
app
  .listen({
    port: 3333,
  })
  .then(() => {
    // executa uma função
    console.log('HTTP server running!');
  });
