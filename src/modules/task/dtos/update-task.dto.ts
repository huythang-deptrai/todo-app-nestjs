import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, Max, Min } from 'class-validator';

export class UpdateTaskDto {
  @ApiPropertyOptional({ type: String })
  @IsString()
  @IsOptional()
  readonly title?: string;

  @ApiPropertyOptional({ type: String })
  @IsString()
  @IsOptional()
  readonly description?: string;

  @ApiPropertyOptional({ type: String })
  @IsInt()
  @Min(0)
  @Max(1)
  @IsOptional()
  readonly completed?: number;
}


