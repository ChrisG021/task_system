import{FastifyPluginOptions,FastifyInstance} from 'fastify'
import {updateTaskController,deleteTaskController,getTaskByIdController, addTaskController,getTasksController } from '../controllers/task_controller';

export const taskRoutes = async (app:FastifyInstance)=>{
    app.get('/',getTasksController);
    app.get('/:id',getTaskByIdController);
    app.post('/add',addTaskController);
    app.delete('/:id',deleteTaskController)
    app.delete('/:id',updateTaskController)

}

