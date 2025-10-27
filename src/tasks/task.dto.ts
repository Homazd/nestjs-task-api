export class Task {
    id: number;
    title: string;
    completed: boolean
}

export class CreateTaskDTO {
    title: string;
}

export class UpdateTaskDTO {
    title?: string;
    completed?: boolean
}