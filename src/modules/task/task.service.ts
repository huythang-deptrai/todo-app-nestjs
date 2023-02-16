import { Inject } from '@nestjs/common';
import { MyGateway } from '../../modules/gateway/gateway';
import { CreateTaskDto } from './dtos/create-task.dto';
import { TaskDto } from './dtos/task.dto';
import { UpdateTaskDto } from './dtos/update-task.dto';
import { ITaskRepo, ITaskService } from './task';

export class TaskService implements ITaskService {

  constructor(
    @Inject('ITaskRepo')  private readonly taskRepo: ITaskRepo,
    @Inject('NotificationGateway')
		private readonly notiGateway: MyGateway,
  ) {}
  async getAll(): Promise<TaskDto[]> {
   return await this.taskRepo.getAll();
  }

  async getTaskById(id: number): Promise<TaskDto> {
    const task = await this.taskRepo.getTaskById(id);
    return task;
  }

  async createTask(dto: CreateTaskDto): Promise<TaskDto> {
    const task = await this.taskRepo.createTask(dto);
    this.notiGateway.checkTask('create new task');
    return task;
  }

  async updateTask(id: number, dto: UpdateTaskDto): Promise<boolean> {
    const isUpdated = await this.taskRepo.updateTask(id, dto);
    this.notiGateway.checkTask('update task');
    return isUpdated;
  }

  async deleteTask(id: number): Promise<boolean> {
    const isDeleted = await this.taskRepo.deleteTask(id);
    this.notiGateway.checkTask('delete task')
    return isDeleted;
  }
  
}