import { default as TaskEntity } from '../../entities/task.entity';
import { Module } from '@nestjs/common';
import { TaskRepository } from '../../repositories/task.repository';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { DatabaseModule } from '../../database/database.module';
import { MyGateway } from '../../modules/gateway/gateway';
import { GatewayModule } from '../../modules/gateway/gateway.module';

const providers = [
  {
    provide: 'ITaskService',
    useClass: TaskService,
  },
  {
    provide: 'ITaskRepo',
    useClass: TaskRepository,
  },
  {
    provide: TaskEntity.name,
    useValue: TaskEntity,
  },
  {
		provide: 'NotificationGateway',
		useClass: MyGateway,
	},
];
@Module({
  imports: [DatabaseModule, GatewayModule],
  providers: [...providers],
  controllers: [TaskController],
  exports: [...providers],
})
export class TaskModule {}
