import { Inject, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from '../modules/task/dtos/create-task.dto';
import { ITaskRepo } from '../modules/task/task';
import { default as TaskEntity } from '../entities/task.entity';
import { TaskDto } from '../modules/task/dtos/task.dto';
import { UpdateTaskDto } from '../modules/task/dtos/update-task.dto';


export class TaskRepository implements ITaskRepo {
  constructor(@Inject(TaskEntity.name) private readonly taskEntity: typeof TaskEntity) {}
  
  async createTask(dto: CreateTaskDto): Promise<TaskDto> {
    const task = await this.taskEntity.create({...dto, completed: 0});
    return task.toDto()
  }

  async getAll(): Promise<TaskDto[]> {
    const tasks = await this.taskEntity.findAll({
      attributes: ['id', 'title', 'description', 'completed']
    });
    return tasks.map(task => task.toDto());
  }

  async getTaskById(id: number): Promise<TaskDto> {
    const task = await this.taskEntity.findByPk(id);
    if (!task) throw new NotFoundException('task not found');
    return task.toDto();
  }

  async updateTask(id: number, dto: UpdateTaskDto): Promise<boolean> {
    try {
      await this.taskEntity.update({...dto}, {where: {id}});
      return true;
    } catch(err) {
      return false;
    }
  }

  async deleteTask(id: number): Promise<boolean> {
    try {
      await this.taskEntity.destroy({
        where: {id}
      });
      return true;
    } catch(err) {
      return false;
    }
  }
}