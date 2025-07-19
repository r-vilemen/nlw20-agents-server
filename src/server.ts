import { fastifyCors } from '@fastify/cors';
import { fastify } from 'fastify';
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod';
import { env } from './env.ts';
import { getRoomsRoute } from './http/routes/get-hooms.ts';
import { createRoomRoute } from './http/routes/create-room.ts';
import { getRoomsQuestions } from './http/routes/get-hooms copy.ts';
import { createQuestionRoute } from './http/routes/create-question.ts';

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  origin: 'http://localhost:5173',
});

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.get('/health', () => {
  return 'OK!';
});

app.register(getRoomsRoute);
app.register(createRoomRoute);
app.register(getRoomsQuestions);
app.register(createQuestionRoute);

app.listen({ port: env.PORT }).then(() => {
  // biome-ignore lint/suspicious/noConsole: Use only development
  console.log(`Port: ${process.env.PORT}`);
  // biome-ignore lint/suspicious/noConsole: Use only development
  console.log('Server is running on http://localhost:3333');
});
