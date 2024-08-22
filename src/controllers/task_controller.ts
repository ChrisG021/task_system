import { FastifyRequest,FastifyReply } from "fastify";
import {Task,TaskManager} from "../models/task";

const taskManager = new TaskManager()


export const addTaskController= (req:FastifyRequest,res:FastifyReply)=>{
    const task:Task = req.body as Task;
    taskManager.addTask(task)
    return res.status(201).send({message:'Task added'})
}

export const getTasksController= (req:FastifyRequest,res:FastifyReply)=>{
    const tasks =taskManager.getTasks()
    return res.status(200).send(tasks)
}

export const getTaskByIdController =(req:FastifyRequest,res:FastifyReply)=>{
    // Isso significa que você está pegando a
    //  propriedade id do objeto req.params e atribuindo-a 
    //  a uma variável chamada id. É uma maneira de simplificar
    //   o código e evitar a necessidade de acessar a propriedade de forma mais verbosa, como req.params.id.
    const {id} = req.params as {id:number}
    console.log(id)
    const task = taskManager.getTaskById(id)
    //ta retornando undefined
    if(task){
        return res.status(200).send(task)
    }else{
        return res.status(404).send('err: '+task)
    }
}

export const deleteTaskController =(req:FastifyRequest,res:FastifyReply)=>{
    const {id} = req.params as {id:number}
    const taskStatus = taskManager.deleteTask(id)
    if(taskStatus){
        return res.status(200).send({message:'Task deleted'})
    }else{
        return res.status(404).send({message:'ERROR'})
    }
 

}

export const updateTaskController =(req:FastifyRequest,res:FastifyReply)=>{
    const {id} = req.params as {id:number}
    const taskUpdated = req.body as Partial<Task>

    const task = taskManager.updateTask(id,taskUpdated)
    if(task){
        return res.status(200).send({message:'Task updated',task})
    }else{
        return res.status(404).send({message:'error'})
    }
}