import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, Task, UpdateTaskDto } from './task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) { }

    @Get()
    findAll(): { data: Task[], message: string, success: boolean } {
        return { data: this.tasksService.findAll(), message: 'fetch data was successful.', success: true }
    }
    @Get(':id')
    findOne(@Param('id') id: string): Task {
        try {
            return this.tasksService.findOne(parseInt(id))
        } catch (error) {
            throw new NotFoundException(error.message)
        }
    }
    @Post()
    create(@Body() createTaskDto: CreateTaskDto): Task {
        return this.tasksService.create(createTaskDto)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateTaskDTO: UpdateTaskDto): Task {
        try {
            return this.tasksService.update(parseInt(id), updateTaskDTO)
        } catch (error) {
            throw new NotFoundException(error.message)
        }
    }
    @Delete(':id')
    delete(@Param('id') id: string): void {
        try {
            this.tasksService.delete(parseInt(id))
        } catch (error) {
            throw new NotFoundException(error.message)
        }
    }

}
