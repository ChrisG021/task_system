//revisando para meu cerebro n esquecer,
export interface Task{
    id:number;
    title:string;
    description:string;
}
export class TaskManager{
    private db_tasks:Task[] =[]

    public addTask(task:Task):void {
        this.db_tasks.push(task)
    }

    public getTasks():Task[]{
        return this.db_tasks
    }

    public getTaskById(id:number):Task|undefined{
        const task = this.db_tasks.find(task=> task.id == id)
        return task
    }

    public deleteTask(id:number): boolean {
        const taskIndex = this.db_tasks.findIndex( task=>task.id ==id)
        //findidex retorna um nmr diferete de -1 se a logica for atendida
        if(taskIndex!== -1 ) {
            this.db_tasks.splice(taskIndex,1)
            return true
        }
        return false
    }
    //partial é pra indicar q n obrigatorio todos os componentes de task sejam definidos
    public updateTask(id:number,updatedTask:Partial<Task>): Task|undefined {
        const taskIndex = this.db_tasks.findIndex( task=>task.id ==id)
        if(taskIndex!== -1){
            //substitui os atributos informados pelos existentes e dps os retorna
            this.db_tasks[taskIndex] = {
                ...this.db_tasks[taskIndex],...updatedTask
            }
            return this.db_tasks[taskIndex]
        }else{
            return undefined
        }
    }
}
