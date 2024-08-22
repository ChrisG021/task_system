import {fastify} from 'fastify'
import {taskRoutes} from './routes/taskRoutes'


const app = fastify()
const PORT = 3000

app.register(taskRoutes, {prefix:'/tasks'})

const start = async ()=>{
    try{
        await app.listen({port:PORT})
        console.log('Server initialized')
    }catch(err){
        app.log.info(err)
        process.exit(1)//encerra e solta o codigo 1 indica erro
    }
}

start()