import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  create(createUserInput: CreateUserInput) {
    return 'This action adds a new user';
  }

  async findAll(): Promise<User[]> {
    return [];
  }

  findOne(id: number): Promise<User> {
    throw new Error('Method not implemented');
  }

  remove(id: number): Promise<User> {
    throw new Error('Method not implemented');
  }
}
