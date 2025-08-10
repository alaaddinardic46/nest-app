import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>, // Repository'yi enjekte et
  ) {}

  // Kullanıcı oluşturma
  async createUser(name: string, email: string, age: number): Promise<User> {
    const user = this.userRepository.create({ name, email, age });
    return this.userRepository.save(user);
  }

  // Tüm kullanıcıları alma
  async getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }
}