import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Kullanıcıları listele
  @Get()
  async getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  // Yeni kullanıcı oluştur
  @Post()
  async createUser(
    @Body() createUserDto: { name: string; email: string; age: number },
  ): Promise<User> {
    const { name, email, age } = createUserDto;
    return this.userService.createUser(name, email, age);
  }
}