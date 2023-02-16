import { CreateTaskDto } from './dtos/create-task.dto';
import { TaskDto } from './dtos/task.dto';
import { UpdateTaskDto } from './dtos/update-task.dto';

export interface ITaskService {
  getAll(): Promise<TaskDto[]>;
  getTaskById(id: number): Promise<TaskDto>;
  createTask(dto: CreateTaskDto): Promise<TaskDto>;
  updateTask(id: number, dto: UpdateTaskDto): Promise<boolean>;
  deleteTask(id: number): Promise<boolean>;
}

export interface ITaskRepo {
  getAll(): Promise<TaskDto[]>;
  getTaskById(id: number): Promise<TaskDto>;
  createTask(dto: CreateTaskDto): Promise<TaskDto>;
  updateTask(id: number, dto: UpdateTaskDto): Promise<boolean>;
  deleteTask(id: number): Promise<boolean>;
}