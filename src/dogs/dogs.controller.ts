import { Controller, Get } from '@nestjs/common';
import { DogsService } from './dogs.service';

@Controller('dogs')
export class DogsController {
    constructor(private readonly dosgsService: DogsService) { }

    @Get()
    findAll(): string {
        return this.dosgsService.findAll()
    }
}
