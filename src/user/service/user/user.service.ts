import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { EqualOperator, FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  getUser(): Promise<User[]> {
    console.log('getUser');
    return this.userRepository.find();
  }
  create(createUser: User) {
    return this.userRepository.save(createUser);
  }
  update(updateUser: User, userId: number) {
    return this.userRepository.update(userId, updateUser);
  }
  delete(userId: number) {
    return this.userRepository.delete(userId);
  }
  getUserById(userId: number) {
    return this.userRepository.findOneById(userId);
  }
}
