import {fastify} from 'fastify'
import {taskRoutes} from './routes/taskRoutes'


const app = fastify()
const PORT = 3000

app.register(taskRoutes, {prefix:'/tasks'})

const start = async () => {
    try {
      console.log("Tentando iniciar o servidor...");
      await app.listen({ port: PORT });
      console.log('Server initialized');
    } catch (err) {
      console.error("Erro ao iniciar o servidor:", err);
      process.exit(1);
    }
  }

start()