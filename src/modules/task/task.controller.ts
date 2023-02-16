import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Inject, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateTaskDto } from './dtos/create-task.dto';
import { UpdateTaskDto } from './dtos/update-task.dto';
import { ITaskService } from './task';

@ApiTags('Task')
@Controller('task')
export class TaskController {
  constructor(@Inject('ITaskService') private readonly taskService: ITaskService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async getAll() {
    return await this.taskService.getAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  async getTask(@Param('id') id: number) {
    return await this.taskService.getTaskById(id);
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  async createTask(@Body() dto: CreateTaskDto) {
    return await this.taskService.createTask(dto);
  }

  @Put('/:id')
  @HttpCode(HttpStatus.OK)
  async updateTask(@Param('id') id: number, @Body() dto: UpdateTaskDto) {
    return await this.taskService.updateTask(id, dto);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  async deleteTask(@Param('id') id: number) {
    return await this.taskService.deleteTask(id);
  }
}