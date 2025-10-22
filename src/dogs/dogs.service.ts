import { Injectable } from '@nestjs/common';

@Injectable()
export class DogsService {
    findAll(): string {
        return 'This action returns all dogs'
    }
}
