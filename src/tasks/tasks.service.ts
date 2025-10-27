import { Injectable } from '@nestjs/common';
import { CreateTaskDto, Task, UpdateTaskDto } from './task.dto';
@Injectable()
export class TasksService {
    private tasks: Task[] = [];
    private idCounter = 1;

    findAll(): Task[] {
        return this.tasks;
    }
    findOne(id: number): Task {
        const task = this.tasks.find((task) => task.id === id)
        if (!task) {
            throw new Error('Task not found')
        }
        return task;
    }

    create(createTaskDTO: CreateTaskDto): Task {
        const newTask: Task = {
            id: this.idCounter++,
            title: createTaskDTO.title,
            completed: false
        };
        this.tasks.push(newTask);
        return newTask;
    }
    update(id: number, updateTaskDTO: UpdateTaskDto): Task {
        const task = this.findOne(id);
        if (updateTaskDTO.title) {
            task.title = updateTaskDTO.title;
        }
        if (updateTaskDTO.completed !== undefined) {
            task.completed = updateTaskDTO.completed
        }
        return task;
    }
    delete(id: number): void {
        const index = this.tasks.findIndex((task) => task.id === id);
        if (index === -1) {
            throw new Error('Task not found')
        }
        this.tasks.splice(index, 1)
    }
}
