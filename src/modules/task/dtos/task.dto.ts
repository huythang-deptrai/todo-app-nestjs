import { ApiProperty } from '@nestjs/swagger';
import TaskEntity from '../../../entities/task.entity';
import { AbstractDto } from '../../../common/abstract.dto';

export class TaskDto extends AbstractDto {
  @ApiProperty({ type: String })
  title: string;

  @ApiProperty({ type: String })
  description:string;

  @ApiProperty({ type: Boolean })
  completed: boolean;

  constructor(task: TaskEntity) {
    super(task);
    this.title = task.title;
    this.description = task.description;
    this.completed = task.completed;
  }
}
