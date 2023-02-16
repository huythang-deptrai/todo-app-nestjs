import { AbstractEntity } from '../common/abstract.entity';
import { UseDto } from '../decorators/use-dto.decorator';
import { Column, DataType, Table } from 'sequelize-typescript';
import { TaskDto } from '../modules/task/dtos/task.dto';

@Table({ modelName: 'tasks', freezeTableName: true, timestamps: false })
@UseDto(TaskDto)
export default class TaskEntity extends AbstractEntity<TaskDto> {
  @Column({ type: DataType.STRING })
  title: string;

  @Column({ type: DataType.STRING })
  description: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  completed: boolean;

}
