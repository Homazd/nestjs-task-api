import { IsNotEmpty, IsString, IsBoolean, IsOptional } from 'class-validator';
export class Task {
    id: number;
    title: string;
    completed: boolean
}

export class CreateTaskDto {
    @IsNotEmpty()
    @IsString()
    title: string;
}
export class UpdateTaskDto {
    @IsOptional()
    @IsString()
    title?: string;

    @IsOptional()
    @IsBoolean()
    completed?: boolean;
}